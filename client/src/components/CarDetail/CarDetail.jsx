// This is just starting code and is made to be changed
import React from 'react';
import './CarDetail.css';

const CarDetail = ({ cars }) => {
  return (
    <div className="car-detail">
      <h2>{cars.make} {cars.model}</h2>
      <p>Year: {cars.year}</p>
      <p>Price: {cars.pricePerDay} per day</p>
      <p>Description: {cars.description}</p>
    </div>
  );
};

export default CarDetail;
