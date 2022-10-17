import axios from 'axios'
//kommer att kasta error på test pga ESM format and Jest tolkning  

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchData = async (urlEnd) => {
  const { data } = await axios.get(BASE_URL + urlEnd);
  return data;
};