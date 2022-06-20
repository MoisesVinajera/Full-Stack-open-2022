import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
  try {
    const { data } = await axios.get(baseUrl);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const create = async (newObject) => {
  try {
    const { data } = await axios.post(baseUrl, newObject);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const update = async (id, newObject) => {
  try {
    const { data } = await axios.put(`${baseUrl}/${id}`, newObject);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default { getAll, create, update };
