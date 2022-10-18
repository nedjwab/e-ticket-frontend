import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEvents, selectEvents } from '../../features/events/eventSlice';

export default function Event() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <div className="w-100">
      <h1 className="text">Events</h1>
      <h2 className="secondry-text">Please select an Event</h2>
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
