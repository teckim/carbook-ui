import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      This is the car details page of id
      {' '}
      {id}
    </div>
  );
};

export default CarDetailsPage;
