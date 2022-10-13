import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Event from './components/events/Event';
import Navbar from './components/navbar/Navbar';
import Navbar from './components/navbar/Navbar';
import Navbar from './components/navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Event />
      <Routes>
        <Route path="/" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
