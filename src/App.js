import React from 'react';
import Event from './components/Event';
import MyReservations from './components/Myreservations';
import './App.css';

function App() {
  return (
    <div className="App">
      <Event />
      <p>Reservations list</p>
      <MyReservations />
    </div>
  );
}

export default App;
