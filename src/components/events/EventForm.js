import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable camelcase */
const AddEvent = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [event_date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [ticket_price, setTicket] = useState('');
  const [seats_available, setseats] = useState('');

  const submitEvent = (e) => {
    e.preventDefault();
    const event = {
      name,
      event_date,
      photo,
      location,
      description,
      ticket_price,
      seats_available,
    };

    const notify = (response) => {
      if (response === 200) {
        toast('Event created succefuly!');
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else {
        toast(' Something wrong happens ! please Try again !');
      }
    };

    const operation = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    };
    fetch('https://radiant-island-08872.herokuapp.com/api/v1/events', operation)
      .then((response) => notify(response.status));

    setName('');
    setDescription('');
    setPhoto('');
    setDate('');
    setLocation('');
    setTicket('');
    setseats('');
  };

  return (
    <section className="add-container">
      <div>
        <div className="form-signin">
          <div className="form-header">
            <h1 className="green-text add-text">Add New Event !</h1>
          </div>
        </div>
        <form
          className="add-form"
          onSubmit={submitEvent}
        >
          <label htmlFor="name">
            <p>Event Name:</p>
            {' '}
            <br />
            <input
              id="name"
              className="add-input"
              type="text"
              placeholder="Dancing event"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength="50"
              required
            />
          </label>

          <label htmlFor="date">
            <p>Event Date :</p>
            {' '}
            <br />
            <input
              className="add-input"
              type="date"
              placeholder="45"
              value={event_date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>

          <label htmlFor="image">
            <p>Event Image:</p>
            {' '}
            <br />
            <input
              id="image"
              className="add-input"
              type="text"
              placeholder="https://Event"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
            />
          </label>

          <label htmlFor="location">
            <p>Event Location:</p>
            {' '}
            <br />
            <input
              id="location"
              className="add-input"
              type="text"
              placeholder="Constantine, Algeria..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>

          <label htmlFor="description">
            <p>Event Description:</p>
            {' '}
            <br />
            <input
              id="description"
              className="add-input"
              type="text"
              placeholder="Reading event is an algerian event that..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              minLength="10"
              required
            />
          </label>

          <label htmlFor="ticket">
            <p>Ticket price :</p>
            {' '}
            <br />
            <input
              id="tickets"
              className="add-input"
              type="number"
              placeholder="20,30 ... "
              value={ticket_price}
              onChange={(e) => setTicket(e.target.value)}
              required
            />
          </label>
          <label htmlFor="seats">
            <p>Seats availaible :</p>
            {' '}
            <br />
            <input
              id="seats"
              className="add-input"
              type="number"
              placeholder="20,30 ... "
              value={seats_available}
              onChange={(e) => setseats(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="submit-button form-button">
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default AddEvent;
