import React from 'react';
import Home from './Home';
import SingleCountry from './pages/SingleCountry';

import { Routes, Route } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/single-country/:id" element={<SingleCountry />} />
    </Routes>
  );
}
export default App;
