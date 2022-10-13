import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Events',
    },
    {
      id: 2,
      path: '/Myreservations',
      text: 'My Reservations',
    },
    {
      id: 3,
      path: '/Addevent',
      text: 'Add event',
    },
    {
      id: 4,
      path: '/Deleteevent',
      text: 'Delete Event',
    },
    {
      id: 5,
      path: '/Addreservation',
      text: 'Reserve',
    },
  ];
  return (
    <header>
      <div className="logo-section">
        <span id="logo-text">E-ticket</span>
      </div>
      <nav className="navBar">
        <ul className="pageLinksSection">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink exact="true" to={link.path} className="pageLink">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
