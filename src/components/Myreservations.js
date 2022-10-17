import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, selectReservations } from '../features/reservations/reservationSlice';

export default function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector(selectReservations);
  console.log(reservations);
  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  if (reservations.length === 0) {
    return (
      <p>No reservation add one !</p>
    );
  }
  return (
    <ul className="list-group p-3">
      {reservations.map((game) => (
        <li key={game.id} className="list-group-item w-25 ">
          <strong className="text-primary">{game.id}</strong>
          <h2 className="text-info">{game.reservation_date}</h2>
        </li>
      ))}
    </ul>
  );
}
