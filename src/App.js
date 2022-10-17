import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Event from './components/events/Event';
import Navbar from './components/navbar/Navbar';
import Register from './components/session/Register';
import SplashScreen from './components/session/SplashScreen';
import Login from './components/session/Login';
import MyReservations from './components/reservation/Myreservations';
import AddReservation from './components/reservation/AddReservation';
import './App.css';

function App() {
  return (
    <div className="App">
      {(sessionStorage.getItem('loginToken')) ? <Navbar /> : null }
      <Navbar />
      <Routes>
        <Route exact path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Addreservation" element={<AddReservation />} />
        <Route path="/Myreservations" element={<MyReservations />} />
      </Routes>
    </div>
  );
}

export default App;
