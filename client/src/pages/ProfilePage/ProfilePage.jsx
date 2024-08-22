// This is just starting code and is made to be changed
import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import { useQuery } from '@apollo/client';

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    email: 'jdoe@aol.com',
  };
  const bookings = [];
  return (
    <div>
      <UserProfile user={user} bookings={bookings} />
    </div>
  );
};

export default ProfilePage;
