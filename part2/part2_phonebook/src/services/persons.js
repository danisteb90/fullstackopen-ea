import axios from "axios";

const getAll = async () => {
  const request = axios.get("http://localhost:3001/persons");
  const response = await request;
  return response.data;
};

const create = async (newPerson) => {
  const request = axios.post("http://localhost:3001/persons", newPerson);
  const response = await request;
  return response.data;
};

const deletePerson = async (id) => {
  const request = axios.delete(`http://localhost:3001/persons/${id}`);
  const response = await request;
  return response.data;
};

const update = async (id, newPerson) => {
  const request = axios.put(`http://localhost:3001/persons/${id}`, newPerson);
  const response = await request;
  return response.data;
};

export default { getAll, create, deletePerson, update };
