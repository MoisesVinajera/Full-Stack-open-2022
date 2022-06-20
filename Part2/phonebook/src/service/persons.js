import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

const create = async (newObject) => {
  const { data } = await axios.post(baseUrl, newObject);
  return data;
};

const update = async (id, newObject) => {
  const { data } = await axios.put(`${baseUrl}/${id}`, newObject);
  return data;
};

const deletePerson = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, deletePerson };
