/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CarCard.module.css';

const Car = ({
  id, model, image, brand, price,
}) => (
  <NavLink className={styles.links} key={id} to={`/car/${id}`}>
    <div className={styles.carCnt} key={id}>
      <div className={styles.imgCnt}>
        <img src={image} alt={brand} className={styles.carImg} />
      </div>
      <div className="model-detail d-flex flex-column justify-content-center align-items-center">
        <h3 className="h4 mt-3">{brand}</h3>
        <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-2">
          <h5 className="h6 pt-1">{model}</h5>
        </div>
        <h5 className={styles.price}>
          $
          {' '}
          {price}
        </h5>
      </div>
    </div>
  </NavLink>
);

export default Car;
