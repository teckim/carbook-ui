/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import style from './CarReservationPage.module.css';
import '../styles/reserve.css';
import { getMyRservationsAsync } from '../features/myReservations/myReservationSlice';

const CarReservationPage = () => {
  const dispatch = useDispatch();
  const initialState = {
    city: '',
    date: '',
    car_id: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reserveData = new FormData();
    reserveData.append('car_id', +formData.car_id);
    reserveData.append('city', +formData.city);
    reserveData.append('date', +formData.date);
    dispatch(getMyRservationsAsync(reserveData));
  };

  return (
    <div className="showcase">
      <p className="search-icon">
        <FaSearch />
      </p>
      <div className="container showcase-inner">
        <h1>Please Make Your Reservation</h1>
        <p className="about">
          Get me a Car Ride app is built as a capstone project by a group of 4
          microverse talented software developers who want to make the
          engineering world a better place to collaborate. by providing a
          platform to connect experienced and upcoming engineering.
        </p>
        <div className="btn-container">
          <form onSubmit={handleSubmit}>
            <div className={style.wrapper}>
              <input type="text" name="city" placeholder="city" onChange={handleChange} />
              <input className={style.date} type="date" name="date" id="" onChange={handleChange} />
            </div>
            <button
              type="submit"
              className={style.reserve}
            >
              Reserve
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarReservationPage;
