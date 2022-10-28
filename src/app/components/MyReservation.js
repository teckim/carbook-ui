import React from 'react';

import style from './MyReservation.module.css';

export default function MyReservation() {
  // const reservations = useSelector((state) => state.reservations);

  return (
    <div className={style.myreservations}>
      <div className={style.pagetitle}>
        <h1 className={style.maintitle}>
          My Reservations
        </h1>
        <p>List of All reservations</p>
      </div>

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
            <tr>
              <td className={style.cardata}>
                <img alt="car" />
                <div className={style.carname}>
                  <h3>car Name</h3>
                  <h3>kinyeramo@gmail.com</h3>
                  <p>Kampala</p>
                  <p>Uganda</p>
                </div>
              </td>
              <td className="hr-center">2022-10-22</td>
              <td className="hr-center">
                <button
                  type="button"
                  className={style.deletebtn}
                >
                  Cancel Reservation
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
