// This is just starting code and is made to be changed
import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';

const ProfilePage = ({ user, bookings }) => {
  return (
    <div>
      <UserProfile user={user} bookings={bookings} />
    </div>
  );
};

export default ProfilePage;
