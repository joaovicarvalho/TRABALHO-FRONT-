import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CharacterListPage from './pages/CharacterListPage';
import CharacterDetailsPage from './pages/CharacterDetailsPage';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/characters" element={<CharacterListPage />} />
      <Route path="/characters/:id" element={<CharacterDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
