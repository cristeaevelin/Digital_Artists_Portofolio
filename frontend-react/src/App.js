import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortofolioPage from './pages/PortofolioPage';
import AddWorkPage from './pages/AddWorkPage';
import './index.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
        <Route path="/add-work" element={<AddWorkPage />} />
      </Routes>
    </Router>
  );
}

export default App;
