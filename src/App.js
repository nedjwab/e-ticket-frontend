import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Events from './components/events/Events';
import Event from './components/events/Event';
import Navbar from './components/navbar/Navbar';
import MyReservations from './components/reservation/Myreservations';
import AddReservation from './components/reservation/AddReservation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Events />
      <Navbar />
      <Routes>
        <Route path="/" element={<Event />} />
        <Route path="/Addreservation" element={<AddReservation />} />
        <Route path="/Myreservations" element={<MyReservations />} />
      </Routes>
    </div>
  );
}

export default App;
