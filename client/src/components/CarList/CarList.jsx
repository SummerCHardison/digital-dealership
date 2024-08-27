import React, { useEffect } from 'react';
import './CarList.css';

const CarList = ({cars}) => {
  

  return (
    <div className="car-list">
      {cars.map((car) => (
        <div key={car.id} className="car">
          <img src={car.image} alt={car.make} />
          <h3>{car.make}</h3>
          <p>{car.model}</p>
          <p>{car.year}</p>
          <p>${car.pricePerDay} Per Day</p>
        </div>
      ))}
    </div>
  );
}


export default CarList;
