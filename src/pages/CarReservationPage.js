/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import style from './CarReservationPage.module.css';
import '../styles/reserve.css';
import { createReservationAsync } from '../features/myReservations/myReservationSlice';

const CarReservationPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    const data = {
      reservation: {
        city: formData.city,
        date: formData.date,
        car_id: id,
      },
    };

    dispatch(createReservationAsync(data)).unwrap()
      .then(() => navigate('/me/reservations'));
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
