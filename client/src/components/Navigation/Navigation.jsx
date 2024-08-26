// This is just starting code and is made to be changed
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import AuthModal from "../AuthModal/AuthModal";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Digital Dealership</Link>
        </li>
        <li>
          <Link to="/car">Cars</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <AuthModal />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
