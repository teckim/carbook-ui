import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'nuka-carousel/lib/carousel';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CarCard from './CarCard';
import './Carousel.css';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3000/api/v1/cars')
      .then((response) => {
        setCars(response.data.cars);
        setLoading(false);
      });
  }, []);

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  let SlideToShowNumber = 1;
  if (mdUp) {
    SlideToShowNumber = 2;
  }
  if (lgUp) {
    SlideToShowNumber = 3;
  }

  if (loading) {
    return (
      <div className="container-fluid vh-100 v-100 d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-spinner fa-spin fs-1" />
      </div>
    );
  }
  
  );
};

export default CarList;
