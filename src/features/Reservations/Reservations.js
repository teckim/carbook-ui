const GET_RESERVATIONS = 'carbook-ui/car/GET_RESERVATIONS';

const url = 'http://localhost:3000/v1/cars/reservations';

// Action Creators
const reservationsRequest = (data) => ({
  type: GET_RESERVATIONS,
  payload: {
    data,
  },
});

// Thunk
const getReservations = (city, carId, date) => (dispatch) => {
  const params = {
    method: 'POST',
    headers: {
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      reservation: {
        city,
        date,
        user_id: 'current_user.id',
        car_id: carId,
      },
    }),
  };
  fetch(`${url}reservations`, params)
    .then((res) => res.json())
    .then((data) => {
      dispatch(reservationsRequest(data));
    })
    .catch((err) => {
      throw new Error(err);
    });
};

// Reducer
const initialState = {
  data: {
    error: 'Loading...',
  },
};

const reservationsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reservationsReducer;
export { reservationsRequest, getReservations };
