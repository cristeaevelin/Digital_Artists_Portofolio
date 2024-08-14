import React from 'react';
import WorkForm from '../components/WorkForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddWorkPage = () => {
  const navigate = useNavigate();

  
  const handleFormSubmit = async (work) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/works`, work);
      console.log('New work submitted:', response.data);
      alert('New Work Created');
      navigate('/portofolio');
    } catch (error) {
      console.error('Error adding new work:', error);
      alert('Failed to submit work. Please try again.');
    }
  };
  

  return (
    <div style={{
      backgroundColor: '#2d3748',  height: '100vh',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', textAlign: 'center'}}>  
      <h1 style={{ fontSize: '1.875rem', fontWeight: '700', margin: 0 }}>Add New Work</h1>
      <WorkForm style={{maxWidth: '600px', maxHeight: '600px'}} onSubmit={ handleFormSubmit } />
    </div>
  );
};

export default AddWorkPage;


