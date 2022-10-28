/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import style from './Reserve.module.css';
import '../../styles/reserve.css';

function Reserve() {
//   const dispatch = useDispatch();

  return (
    <div className="showcase">
      <p className="search-icon">
        <FaSearch />
      </p>
      <div className="container showcase-inner">
        <h1>Connect with vetted software developer</h1>
        <p className="about">
          Get me a Car Ride app is built as a capstone project by a group of 4
          microverse talented software developers who want to make the
          engineering world a better place to collaborate. by providing a
          platform to connect experienced and upcoming engineering.
        </p>
        <p className="about">
          It is a free, open-source platform which aims to connect experienced
          and upcoming software developers for a live mentorship all over the
          world.
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
