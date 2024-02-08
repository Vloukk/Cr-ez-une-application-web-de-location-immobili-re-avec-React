import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import "./styles/App.scss";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/Error/Error';
import Logement from './pages/Logements/Logement';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
