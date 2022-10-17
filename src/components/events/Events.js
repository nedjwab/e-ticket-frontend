/*eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, selectEvents } from '../../features/events/eventSlice';
import Event from './Event';


export default function Events() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
  const renderEventPage = (event) => {
    <Event event={event} />;
  };

  return (
    <section >
      <h1>Next events </h1>
      <ul >
        {events.map((event) => (
          <li key={event.id}  onClick={renderEventPage(event)}>
            <img src={event.photo} alt="event cover"  />
            <h2>{event.name}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
}
