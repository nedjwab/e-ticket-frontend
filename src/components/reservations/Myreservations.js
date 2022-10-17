import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservation, selectReservations } from '../features/events/eventSlice';

export default function Reservations() {
  const dispatch = useDispatch();
  const reservations = useSelector(selectReservations);
  useEffect(() => {
    dispatch(fetchReservation());
  }, []);
  return (
    <ul className="list-group p-3">
      {reservations.map((game) => (
        <li key={game.id} className="list-group-item w-25 ">
          <strong className="text-primary">{game.id}</strong>
          <h2 className="text-info">{game.name}</h2>
        </li>
      ))}
    </ul>
  );
}
