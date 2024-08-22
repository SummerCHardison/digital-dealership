// This is just starting code and is made to be changed
import React from 'react';
import CarList from '../../components/CarList/CarList';

const CarPage = ({ cars }) => {
  return (
    <div>
      <CarList cars={cars} />
    </div>
  );
};

export default CarPage;
