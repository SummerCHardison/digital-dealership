// This is just starting code and is made to be changed
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ car }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    // Handle the booking logic here
  };

  return (
    <form className="booking-form" onSubmit={handleBooking}>
      <h3>Book {car.make} {car.model}</h3>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
