// This is just starting code and is made to be changed
import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user, bookings }) => {
  return (
    <div className="user-profile">
      <h2>{user.name}'s Profile</h2>
      <p>Email: {user.email}</p>
      <h3>Your Bookings</h3>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>{booking.car.make} {booking.car.model} - {booking.startDate} to {booking.endDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
