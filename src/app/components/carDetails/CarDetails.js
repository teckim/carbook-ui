import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  retrieveCars,
  retrieveCar,
  removeCar,
} from '../../../features/car/carDetailsSlice';
import './carDetails.css';
import car from './car.jpg';

const CarDetails = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const dataFetchedRef = useRef(false);

  const { id } = useParams();
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(retrieveCars());
    dispatch(retrieveCar(id));
  }, [dispatch]);

  return (
    <>
      {/* <div key={details.id} className="columns-1 md:columns-2 mx-8">
        <img className="w-full" src={car} alt="car" />
        <div className="details mx-8">
          <h1 className="text-3xl font-bold underline">{details.brand}</h1>
          <h1>{details.model}</h1>
          <h1>{details.description}</h1>
        </div>
      </div> */}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        {/* <figure> */}
        <img src={car} alt="car" />
        {/* </figure> */}
        <div className="card-body">
          <h2 className="card-title">{details.brand}</h2>
          <p>{details.description}</p>
          <p>
            <strong>{details.price}</strong>
          </p>
          <div className="card-actions">
            <button
              type="button"
              className="btn bg-secondary-focus"
              onClick={() => dispatch(removeCar(details))}
            >
              Delete the car
            </button>
            <button type="button" className="btn btn-primary">
              Reserve me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CarDetails;
