import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  retrieveCars,
  retrieveCar,
  removeCar,
} from '../features/car/carDetailsSlice';
import '../styles/carDetails.css';

const CarDetailsPage = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const dataFetchedRef = useRef(false);

  const { id } = useParams();
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(retrieveCars());
    dispatch(retrieveCar(id));
  }, [dispatch, id]);
  return (
    <div className="details">
      <div className="flex items-center h-screen">
        <div key={details.id} className="columns-1 md:columns-2 mx-8">
          <img className="w-full" src={details.image} alt="car" />
          <div className="mx-8 flex flex-col">
            <div className="justify-self-end">
              <h1 className="text-3xl font-bold">{details.brand}</h1>
              <h1>{details.description}</h1>
            </div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Model
                    </th>
                    <td className="py-4 px-6">{details.model}</td>
                  </tr>
                  <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Price
                    </th>
                    <td className="py-4 px-6">{details.price}</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex md:mt-24">
                {/* <button
                  type="button"
                  className="btn bg-red-700 rounded-full"
                  onClick={() => dispatch(removeCar(details))}
                >
                  Delete car
                </button> */}
                <button
                  type="button"
                  className="btn btn-style justify-self-end rounded-full"
                  onClick={() => dispatch(removeCar(details))}
                >
                  Reserve car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
