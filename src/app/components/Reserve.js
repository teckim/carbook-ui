/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import style from './Reserve.module.css';
import '../../styles/reserve.css';
import { getMyRservationsAsync } from '../../features/myReservations/myReservationSlice';

function Reserve() {
  const dispatch = useDispatch();
  const carRid = useSelector((state) => state.cars);
  const initialState = {
    country: '',
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const reserveData = new FormData();
    reserveData.append('car_id', +formData.car_id);
    reserveData.append('user_id', +formData.user_id);
    reserveData.append('countery', +formData.country);
    reserveData.append('city', +formData.city);
    reserveData.append('date', +formData.date);
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
          <form>
            <div className={style.wrapper}>
              <input type="" name="country" placeholder="country" />
              <input type="text" name="city" placeholder="city" />

              <select name="car_id">
                <option>Kinyera</option>
              </select>
              <input className={style.date} type="date" name="date" id="" />
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
}

export default Reserve;
