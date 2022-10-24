import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaPlus, FaLinkedin, FaTwitter, FaInstagram,
} from 'react-icons/fa';
import './sidebar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/home',
      text: 'Events',
    },
    {
      id: 2,
      path: '/Myreservations',
      text: 'Reservations',
    },
    {
      id: 3,
      path: '/Addevent',
      text: 'Add event',
    },
    {
      id: 4,
      path: '/Addreservation',
      text: 'Reserve',
    },
    {
      id: 5,
      path: '/',
      text: 'sign out',
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
                      <FaPlus />
                    </div>
                    <div className="sidebar__menu__item__text">
                      {link.text}
                    </div>
                  </div>
                </NavLink>
              </div>
            ))
        }

        <div className="sidebar-footer">
          <div className="footer-element">
            <FaLinkedin />
          </div>
          <div className="footer-element">
            <FaTwitter />
          </div>
          <div className="footer-element">
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
