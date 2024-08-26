import React from 'react';
import BookingForm from '../../components/BookingForm/BookingForm';

const BookingPage = ({ car }) => {
  return (
    <div>
      {car ? (
        <BookingForm car={car} />
      ) : (
        <p>No previous booksing to display at this time, please check again later.</p>
      )}
    </div>
  );
};

export default BookingPage;