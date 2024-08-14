import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkCard from '../components/WorkCard';

const PortofolioPage = () => {
  const [works, setWorks] = useState([]);
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/works`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWorks(data);
      } catch (error) {
        console.error('Error fetching works:', error);
      }
    };

    fetchWorks();
  }, [API_BASE_URL]);

  const toggleVisibility = async (id) => {
    const work = works.find(work => work.id === id);
    if (!work) return;

    const updatedWork = { ...work, isVisible: !work.isVisible };

    try {
      const response = await fetch(`${API_BASE_URL}/works/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedWork),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }


      setWorks((prevWorks) =>
        prevWorks.map((work) =>
          work.id === id ? updatedWork : work
        )
      );
    } catch (error) {
      console.error('Error updating work visibility:', error);
    }
  };

  const deleteWork = async (id) => {
    try {
      await fetch(`${API_BASE_URL}/works/${id}`, {
        method: 'DELETE',
      });

      setWorks((prevWorks) => prevWorks.filter((work) => work.id !== id));
    } catch (error) {
      console.error('Error deleting work:', error);
    }
  };

  const handleAddWork = () => {
    navigate('/add-work');
  };

  return (
    <div style={{
      paddingLeft: '2.5rem', paddingRight: '2.5rem', paddingTop: '250px',
      backgroundColor: '#333', color: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1 style={{
        fontSize: '1.875rem',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '1.25rem',
      }}> My Portofolio
        </h1>
      <button
        onClick={handleAddWork}
        style={{
          padding: '1rem',
          borderRadius: '9999px',
          backgroundColor: '#10b981',
          color: '#ffffff',
          fontWeight: '300px',
          marginBottom: '2rem',
        }}
      >Add New Work
      </button>
      <div style={{
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
        gap: '2rem',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
      }}>
        {works.length > 0 ? (
          works.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              onToggleVisibility={toggleVisibility}
              onDeleteWork={deleteWork}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%' }}>No works to display.</p>
        )}
      </div>
      <a href="/" style={{ marginTop: '1rem' }}>
        <button style={{
          padding: '1rem', marginTop: '2rem', 
          borderRadius: '9999px',
          background: 'linear-gradient(to right, #7c3aed, #f97316)',
          color: '#ffffff', fontWeight: '600',
        }}>
          Back to Homepage
        </button>
      </a>
    </div>
  );
};

export default PortofolioPage;
