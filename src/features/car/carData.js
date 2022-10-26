import http from '../../modules/http';

const getAll = () => http.get('cars');

const get = (id) => http.get(`cars/${id}`);

const create = (data) => http.post('cars', data);

const update = (id, data) => http.put(`cars/${id}`, data);

const remove = (id) => http.delete(`cars/${id}`);

const removeAll = () => http.delete('cars');

const findByTitle = (title) => http.get(`/car?title=${title}`);

const CarData = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default CarData;
