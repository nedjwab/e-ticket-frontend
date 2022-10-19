import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiLocationMarker, HiOutlineArrowSmLeft } from 'react-icons/hi';
import { Audio } from 'react-loader-spinner';

export default function Event() {
  const { eventID } = useParams();
  const [eventDetails, setEventDetails] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const eventData = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://127.0.0.1:3000/api/v1/events/${eventID}`, eventData)
      .then((response) => response.json())
      .then((data) => setEventDetails(data))
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
        <div key={eventDetails.id} className="cards">
          <div className="img-container">
            <img src={eventDetails.photo} alt={eventDetails.name} />
          </div>
          <p className="link card-title">{eventDetails.name}</p>
          <div className="card-body">
            <p className="card-text">
              {' '}
              {eventDetails.description}
            </p>
            <div className="info-container">
              <p>Ticket Price :</p>
              <p className="green-text">
                {eventDetails.ticket_price}
                $
              </p>
            </div>
            <div className="info-container">
              <p>Seats Available :</p>
              <p className="green-text">{eventDetails.seats_available}</p>
            </div>
            <div className="location-container">
              <div className="icon">
                <HiLocationMarker />
              </div>
              <p>{eventDetails.location}</p>
            </div>
            <Link to="/Addreservation" className="link link-decoration detail-reserve">Reserve</Link>
          </div>
        </div>
        <Link to="/home" className="link green-text back-button"><HiOutlineArrowSmLeft /></Link>
      </div>
    </div>
  );
}
