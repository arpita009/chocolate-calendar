// responsible for calendar-related operations
import axios from 'axios';

export function postOpen(day) {
  return axios
    .post(`http://localhost:5001/open/chocolate`, { day })
    .then((response) => response)
    .catch((err) => alert('error in posting to open slot', err));
}

export function getStatus() {
  return axios
    .get(`http://localhost:5001/chocolates`)
    .then((response) => response)
    .catch((err) => alert('error in getting response from the server', err));
}

export function postClosed(day) {
  return axios
    .post(`http://localhost:5001/eat/chocolate`, { day })
    .then((response) => response)
    .catch((err) => alert('error in posting to eat chocolate', err));
}

export async function postReset() {
  try {
    const response = await axios.post(`http://localhost:5001/reset/chocolate`);
    return response;
  } catch (err) {
    return err;
  }
}
