/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TailSpin } from 'react-loading-icons';
import { useNavigate } from 'react-router-dom';
import style from './MyReservation.module.css';
import { cancelReservationAsync } from '../../features/myReservations/myReservationSlice';

export default function MyReservation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.myreseravation.myReservations);
  const cancelReservation = (id) => {
    dispatch(cancelReservationAsync(id)).unwrap()
      .then(() => navigate(0));
  };
  return (
    <div className={style.myreservations}>
      <div className={style.pagetitle}>
        <h1 className={style.maintitle}>
          My Reservations
        </h1>
        <p>List of All reservations</p>
      </div>

      <div>
        {
          (reservations && reservations.length)
            ? (
              <ReservationsTable
                reservations={reservations}
                cancelReservation={cancelReservation}
              />
            )
            : (
              <div>
                <TailSpin />
                <p className="text-center">Seems like you have no reservations yet!</p>
              </div>
            )
        }
      </div>
    </div>
  );
}

const ReservationsTable = ({ reservations, cancelReservation }) => (
  <div className={style.carstable}>
    <table>
      <thead>
        <tr>
          <th>Reservations</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        { reservations.map((reservation) => (
          <tr key={reservation.id}>
            <td className={style.cardata}>
              <img src="../assert/Race-Car.png" alt="car" />
              <div className={style.carname}>
                <h3>{reservation.brand}</h3>
                <p>{reservation.city}</p>
              </div>
            </td>
            <td className="hr-center">2022-10-22</td>
            <td className="hr-center">
              <button
                type="button"
                className={style.deletebtn}
                onClick={() => cancelReservation(reservation.id)}
              >
                Cancel Reservation
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
