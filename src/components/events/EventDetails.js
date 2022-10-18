import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Event() {
  // console.log(props.match.params.id);
  const { eventID } = useParams();
  const [roomDetails, setRoomDetails] = useState('');
  useEffect(() => {
    const roomData = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://127.0.0.1:3001/api/v1/events/${eventID}`, roomData)
      .then((response) => response.json())
      .then((data) => setRoomDetails(data));
  }, []);
  console.log(eventID);
  return (
    <div className="w-100">
      <div className="card-container">
        <div key={roomDetails.id} className="cards">
          <div className="img-container">
            <img src={roomDetails.photo} alt={roomDetails.name} />
          </div>
          <p className="link card-title">{roomDetails.name}</p>
          <div className="card-body">
            <p className="card-text">
              {' '}
              {roomDetails.description}
            </p>
            <p>{roomDetails.event_date}</p>
            <p>
              {roomDetails.ticket_price}
              $
            </p>
            <p>{roomDetails.seats_available}</p>
            <p>{roomDetails.location}</p>
            <Link to="/Addreservation" className="link link-decoration">Reserve</Link>
          </div>
        </div>
        <Link to="/" className="link link-decoration">Back</Link>
      </div>
    </div>
  );
}
