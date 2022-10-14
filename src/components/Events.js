import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, selectEvents } from '../features/events/eventSlice';
import styles from './styles/events.module.css';

export default function Event() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
  return (
    <section className={styles}>
      <h1>Next events </h1>
      <ul className={styles.eventsUl}>
        {events.map((event) => (
          <li key={event.id} className={styles.eventsLi}>
            <img src={event.photo} alt='event cover' className={styles.eventImg}/>
            <h2>{event.name}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
}
