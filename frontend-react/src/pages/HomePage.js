import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#333', color: '#f0f0f0', minHeight: '100vh', padding: '10px' }}>
        <div style={{ textAlign: 'center', marginTop: '250px' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.25rem' }}>Welcome to My Portofolio</h1>
      <p style={{ marginBottom: '1.25rem' }}>Discover my digital art and creative projects.</p>
      <Link to="/portofolio">
      <button style={{
            padding: '1rem',
            marginBottom: '0.5rem',
            borderRadius: '9999px',
            background: 'linear-gradient(to right, #ec4899, #f97316)',
            color: '#ffffff',
            fontWeight: '600'
          }}>
          View Portofolio
        </button>
      </Link>
      </div>
    </div>
  );
};

export default HomePage;