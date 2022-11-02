import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MyReservation from '../app/components/MyReservation';
import { getMyRservationsAsync } from '../features/myReservations/myReservationSlice';

const MyReservationsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRservationsAsync());
  });

  return (
    <div>
      <MyReservation />
    </div>
  );
};

export default MyReservationsPage;
