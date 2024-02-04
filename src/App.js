
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import "./styles/App.scss";
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </Router>
  );
};

export default App;
