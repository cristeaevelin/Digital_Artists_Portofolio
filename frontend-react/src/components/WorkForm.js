import React, { useState } from 'react';
import axios from 'axios';

const WorkForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [clientLink, setClientLink] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImagePath, setUploadedImagePath] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let uploadedImagePath = ''; 

    try {
      if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);

        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/works/upload`, formData);
        uploadedImagePath = response.data.path;
        setUploadedImagePath(uploadedImagePath);
      }

      const workData = {
        title,
        description,
        imagePath: uploadedImagePath,
        clientLink
      };

      onSubmit(workData);
      setError('');
    } catch (err) {
      console.error('Error uploading file:', err);
      setError('Error uploading file. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} 
          style={{
            padding: '2.5rem', display: 'flex', flexWrap: 'wrap', flexDirection: 'column',
            border: '1px solid', borderRadius: '0.75rem',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
            gap: '1rem', maxWidth: '600px', margin: '0 auto'
            }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            backgroundColor: '#5c6b7f', 
            borderRadius: '0.25rem', border: '1px solid #ccc',
            height: '2.5rem', padding: '0.5rem'
          }}/>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            backgroundColor: '#5c6b7f',
            borderRadius: '0.25rem', border: '1px solid #ccc',
            padding: '0.5rem',
            minHeight: '100px', 
            resize: 'vertical'
          }}/>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Image File</label>
        <input
          type="file"
          onChange={(e) => setImageFile(e.target.files[0])}
          style={{
            backgroundColor: '#5c6b7f', borderRadius: '0.25rem', border: '1px solid #ccc', padding: '0.5rem'
          }}/>
          {uploadedImagePath && (
          <img src={`${process.env.REACT_APP_API_BASE_URL}/${uploadedImagePath}`} alt="Uploaded Preview" style={{ width: '200px', marginTop: '1rem' }} />
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Client Link</label>
        <input
          type="text"
          value={clientLink}
          onChange={(e) => setClientLink(e.target.value)}
          style={{ backgroundColor: '#5c6b7f', borderRadius: '0.25rem',
           border: '1px solid #ccc', padding: '0.5rem' }}/>
      </div>

      {error && <div style={{ color: '#ef4444', marginTop: '0.5rem' }}>{error}</div>}

      <button
        type="submit"
        style={{
          backgroundColor: '#3b82f6', color: '#ffffff',
          border: 'none',  borderRadius: '0.25rem',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          fontSize: '0.875rem', fontWeight: '500'
        }}>Submit
      </button>
    </form>
  );
};

export default WorkForm;
