import React, { useEffect } from 'react';
import CarList from '../../components/CarList/CarList';
import { useQuery } from '@apollo/client';
import { QUERY_CARS } from '../../utils/queries';

const CarPage = () => {
  const { loading, data, error } = useQuery(QUERY_CARS);
  const cars = data?.cars || [];

  useEffect(() => {
    if (error) {
      console.error('Error fetching car data:', error);
    }
  }, [error]);
console.log(data)


  if (loading) {
    return <p>Loading...</p>;
  }

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