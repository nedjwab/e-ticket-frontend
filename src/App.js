import React from 'react';
import MyReservations from './components/Myreservations';
import { Route, Routes } from 'react-router-dom';
import Event from './components/events/Event';
import Navbar from './components/navbar/Navbar';
import MyReservations from './components/reservation/Myreservations';
import AddReservation from './components/reservation/AddReservation';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Reservations list</p>
      <MyReservations />
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
