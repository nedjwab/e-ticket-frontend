import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, selectEvents } from '../features/events/eventSlice';

export default function Event() {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  console.log(events);
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
  return (
    <ul className="list-group p-3">
      {events.map((game) => (
        <li key={game.id} className="list-group-item w-25 ">
          <strong className="text-primary">{game.id}</strong>
          <h2 className="text-info">{game.name}</h2>
        </li>
      ))}
    </ul>
  );
}
