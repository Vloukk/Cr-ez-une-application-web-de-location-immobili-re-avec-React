
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import "./styles/App.scss";
import Home from './pages/Home/Home';
import About from './pages/About/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
