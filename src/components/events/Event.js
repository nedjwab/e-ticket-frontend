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
    <ul className="list-group p-3">
      {events.map((game) => (
        <li key={game.id} className="list-group-item w-25 ">
          <strong className="text-primary">{game.id}</strong>
          <Link to={`/events/${game.id}`}>{game.name}</Link>
        </li>
      ))}
    </ul>
  );
}
