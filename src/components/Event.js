import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, selectEvents } from '../features/events/eventSlice';
import './styles/event.css'
export default function Event() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
  return (
    <section className='events-container'>
      <h1>Next events </h1>
      <ul className="events-ul">
        {events.map((event) => (
          <li key={event.id} className="event-li">
            <img src={event.photo} alt='event cover' className='event-img' />
            <h2 className="text-info">{event.name}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
}
