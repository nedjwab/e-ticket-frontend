import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Events',
      icon: 'i',
    },
    {
      id: 2,
      path: '/Myreservations',
      text: 'My Reservations',
      icon: 'i',
    },
    {
      id: 3,
      path: '/Addevent',
      text: 'Add event',
      icon: 'i',
    },
    {
      id: 4,
      path: '/Deleteevent',
      text: 'Delete Event',
      icon: 'i',
    },
    {
      id: 5,
      path: '/Addreservation',
      text: 'Reserve',
      icon: 'i',
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        E-ticket
      </div>
      <div className="sidebar__menu">

        {
            links.map((link) => (
              <div key={link.id}>
                <NavLink exact="true" to={link.path} className="pageLink">
                  <div className="sidebar__menu__item">
                    <div className="sidebar__menu__item__icon">
                      {link.icon}
                    </div>
                    <div className="sidebar__menu__item__text">
                      {link.text}
                    </div>
                  </div>
                </NavLink>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default Navbar;
