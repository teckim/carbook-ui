import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCarDetails } from '../../../features/car/carDetailsSlice';

const CarDetails = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const dataFetchedRef = useRef(false);
  console.log(details);

  const { id } = useParams();
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(getCarDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <div key={details.id}>
        <h1>{details.brand}</h1>
        <h1>{details.model}</h1>
      </div>
    </>
  );
};
export default CarDetails;
