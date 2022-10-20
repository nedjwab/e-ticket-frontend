import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Event from './components/events/Event';
import NavbarLayout from './components/navbar/NavbarLayout';
import MyReservations from './components/reservation/Myreservations';
import AddReservation from './components/reservation/AddReservation';
import EventDetails from './components/events/EventDetails';
import SignUp from './components/users/SignUp';
import Login from './components/users/Login';
import SplashScreen from './components/session/SplashScreen';
import AddEvent from './components/events/EventForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route path="/home" element={<Event />} />
          <Route path="/Addreservation" element={<AddReservation />} />
          <Route path="/Myreservations" element={<MyReservations />} />
          <Route path="/events/:eventID" element={<EventDetails />} />
          <Route path="/Addevent" element={<AddEvent />} />
        </Route>
        <Route exact path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
