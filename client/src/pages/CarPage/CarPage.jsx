import React from 'react';
import CarList from '../../components/CarList/CarList';

const CarPage = ({ cars }) => {
  return (
    <div>
      {cars && cars.length > 0 ? (
        <CarList cars={cars} />
      ) : (
        <p>No cars available at the moment. Please check back later.</p>
      )}
    </div>
  );
};

export default CarPage;