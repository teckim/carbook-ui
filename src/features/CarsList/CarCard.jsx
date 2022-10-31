/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';


const Car = ({
  id, model, image, brand, price,
}) => (
  <NavLink className={styles.links} key={id} to={`/car/${id}`}>
    <div className={styles.carCnt} key={id}>
      <div className={styles.imgCnt}>
        <img src={image} alt={brand} className={styles.carImg} />
      </div>
      
    </div>
  </NavLink>
);

export default Car;
