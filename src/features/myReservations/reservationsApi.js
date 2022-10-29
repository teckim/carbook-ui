import http from '../../modules/http';

const getAll = () => http.get('reservations');

const reservationData = { getAll };

export default reservationData;
