import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { retrieveCars, removeCar } from '../../../features/car/carSlice';

const DeleteCar = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car.all);
  const dataFetchedRef = useRef(false);

  const { id } = useParams();
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(retrieveCars());
  }, [dispatch, id]);

  if (!cars) {
    return <p>No car found</p>;
  }

  return (
    <div className="mt-24">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Car name
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr
                key={car.id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {car.brand}
                </th>
                <td className="py-4 px-6">{car.price}</td>
                <td className="py-4 px-6">
                  <button
                    type="button"
                    className="btn bg-red-700 rounded-full"
                    onClick={() => dispatch(removeCar(car))}
                  >
                    Delete car
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteCar;
