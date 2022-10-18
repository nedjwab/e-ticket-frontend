import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Room() {
  // console.log(props.match.params.id);
  const { eventID } = useParams();
  const [roomDetails, setRoomDetails] = useState('');
  useEffect(() => {
    const roomData = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://127.0.0.1:3001/api/v1/events/${eventID}`, roomData)
      .then((response) => response.json())
      .then((data) => setRoomDetails(data));
  }, []);
  console.log(eventID);
  return (
    <div className="item">
      <h3 className="room-name text-center">
        {roomDetails.name}
        { eventID }
      </h3>
    </div>
  );
}
