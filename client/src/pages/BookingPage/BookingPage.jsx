// This is just starting code and is made to be changed
import React from 'react';
import BookingForm from '../components/BookingForm/BookingForm';

const BookingPage = ({ car }) => {
  return (
    <div>
      <BookingForm car={car} />
    </div>
  );
};

export default BookingPage;
