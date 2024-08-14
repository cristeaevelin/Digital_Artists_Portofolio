import React from 'react';
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const WorkCard = ({ work, onToggleVisibility, onImageUpload, onDeleteWork }) => {
  const fileInputRef = React.useRef(null);


  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={{
      backgroundColor: '#2d3748',
      display: 'flex', flexDirection: 'column', flexWrap: 'wrap',
      padding: '1rem', position: 'relative',
      border: '1px solid #4a5568', borderRadius: '0.75rem', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
      margin: 'auto', height: '500px', width: '400px'
    }}>
      {work.isVisible ? (
        <>
          <h2 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: '#f7fafc'}}>
            {work.title}
          </h2>
          <p style={{ fontStyle: 'italic', padding: '0.5rem 0', color: '#e2e8f0' }}>
            {work.description}
          </p>
          
          {work.imagePath && (
            <img 
              src={`${API_BASE_URL}/uploads${work.imagePath}`} 
              alt={work.title} 
              style={{ width: '200px', height: '150px', borderRadius: '0.5rem', margin: '0.5rem 0'
              }}/>
          )}

          <a href={work.clientLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              color: '#f56565', padding: '0.5rem 0', 
              textDecoration: 'underline', marginTop: 'auto',
              position: 'relative', marginBottom: '3rem'
            }}> Go to client's page </a>
  
          <div style={{ bottom: '1rem', right: '1rem', position: 'absolute' }}>
            <button
              onClick={handleFileInputClick}
              style={{
                position: 'relative', bottom: '1rem', right: '1rem',
                padding: '0.5rem 1rem', borderRadius: '9999px',
                background: 'linear-gradient(to right, #ec4899, #f97316)',
                color: '#ffffff', fontSize: '1rem', cursor: 'pointer'
              }}>
              <span style={{ fontSize: '1rem', textAlign: 'center' }}>
                Upload Image
              </span>
            </button>
          </div>
  
          <button 
            onClick={() => onToggleVisibility(work.id)} 
            style={{
              position: 'absolute', top: '1rem', right: '1rem',
              padding: '0.5rem 1rem', borderRadius: '0.25rem',
              backgroundColor: '#f56565', color: '#ffffff',
              cursor: 'pointer', fontSize: '1rem' }}>
            <PiEyeSlash />
          </button>
  
          <button 
            onClick={() => onDeleteWork(work.id)} 
            style={{
              position: 'absolute', bottom: '1rem', left: '1rem', 
              padding: '0.5rem 1rem', borderRadius: '0.25rem',
              backgroundColor: '#f56565', color: '#ffffff',
              cursor: 'pointer',  fontSize: '1rem'
            }}> Delete
          </button>
        </>
      ) : (
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', 
          width: '100%', height: '8rem', marginTop: '1rem'
        }}>
          <button 
            onClick={() => onToggleVisibility(work.id)} 
            style={{
              padding: '0.5rem 1rem', borderRadius: '0.25rem', border: 'none',
              backgroundColor: '#48bb78', color: '#ffffff',
              cursor: 'pointer', fontSize: '1rem'
            }}>
            <PiEyeLight />
          </button>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        onChange={(e) => onImageUpload(work.id, e.target.files[0])}
        style={{ display: 'none' }} 
      />
    </div>
  );
}
  

export default WorkCard;
