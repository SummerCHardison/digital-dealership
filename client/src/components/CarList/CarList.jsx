// This is just starting code and is made to be changed
import React from 'react';
import './CarList.css';

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map(car => (
        <div key={car.id} className="car-card">
          <h3>{car.make} {car.model}</h3>
          <p>{car.year}</p>
          <p>{car.pricePerDay} per day</p>
        </div>
      ))}
    </div>
  );
};

export default CarList;
