// This is just starting code and is made to be changed
import React from 'react';
import './CarDetail.css';

const CarDetail = ({ car }) => {
  return (
    <div className="car-detail">
      <h2>{car.make} {car.model}</h2>
      <p>Year: {car.year}</p>
      <p>Price: {car.pricePerDay} per day</p>
      <p>Description: {car.description}</p>
    </div>
  );
};

export default CarDetail;
