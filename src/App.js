import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Event from './components/events/Event';
import Navbar from './components/navbar/Navbar';
import MyReservations from './components/reservation/Myreservations';
import AddReservation from './components/reservation/AddReservation';
import EventDetails from './components/events/EventDetails';
import SignUp from './components/users/SignUp';
import Login from './components/users/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Event />} />
        <Route path="/" element={<Login />} />
        <Route path="/Addreservation" element={<AddReservation />} />
        <Route path="/Myreservations" element={<MyReservations />} />
        <Route path="/events/:eventID" element={<EventDetails />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
