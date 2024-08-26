import React, { useEffect, useState } from 'react';
import './CarList.css';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching car data:', error));
  }, []);

  return (
    <div className="car-list">
      {cars.map((car) => (
        <div key={car._id} className="car">
          <img src={car.image} alt={car.make} />
          <h3>{car.make}</h3>
          <p>{car.model}</p>
          <p>{car.year}</p>
          <p>{car.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CarList;