// This is just starting code and is made to be changed
import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cars">Cars</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
