import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DocumentPage from './pages/DocumentPage';
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/document" element={<DocumentPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
