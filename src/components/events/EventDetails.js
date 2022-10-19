import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiLocationMarker, HiOutlineArrowSmLeft } from 'react-icons/hi';
import { Audio } from 'react-loader-spinner';

export default function Event() {
  const { eventID } = useParams();
  const [roomDetails, setRoomDetails] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const roomData = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://127.0.0.1:3001/api/v1/events/${eventID}`, roomData)
      .then((response) => response.json())
      .then((data) => setRoomDetails(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="#97bf11"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }

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
            <div className="info-container">
              <p>Ticket Price :</p>
              <p className="green-text">
                {roomDetails.ticket_price}
                $
              </p>
            </div>
            <div className="info-container">
              <p>Seats Available :</p>
              <p className="green-text">{roomDetails.seats_available}</p>
            </div>
            <div className="location-container">
              <div className="icon">
                <HiLocationMarker />
              </div>
              <p>{roomDetails.location}</p>
            </div>
            <Link to="/Addreservation" className="link link-decoration detail-reserve">Reserve</Link>
          </div>
        </div>
        <Link to="/home" className="link green-text back-button"><HiOutlineArrowSmLeft /></Link>
      </div>
    </div>
  );
}
