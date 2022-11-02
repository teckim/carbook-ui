import http from '../../modules/http';

const getAll = () => http.get('me/reservations');

const create = (data) => http.post('me/reservations', data);

const cancel = (id) => http.delete(`me/reservations/${id}`);

const reservationData = { getAll, create, cancel };

export default reservationData;
