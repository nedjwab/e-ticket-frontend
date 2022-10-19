import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Audio } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { fetchEvents, selectEvents } from '../../features/events/eventSlice';

export default function Event() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  console.log(events);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchEvents());
    setTimeout(() => {
      dispatch(setLoading());
    }, 1000);
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
      <h1 className="text">Our Events List</h1>
      <h2 className="secondry-text ">Please select one</h2>
      <div className="card-container">
        {events.map((event) => (
          <div key={event.id} className="cards">
            <div className="img-container">
              <img src={event.photo} alt={event.name} />
            </div>
            <Link to={`/events/${event.id}`} className="link card-title">{event.name}</Link>
            <div className="card-body">
              <p className="card-text">
                {' '}
                {event.description}
              </p>
              <Link to="/Addreservation" className="link link-decoration">Reserve</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
