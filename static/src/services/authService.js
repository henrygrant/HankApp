import axios from 'axios';

export default {
  login: (user) => {
    return axios.post('http://localhost:3000/login', user)
  },
  register: (user) => {
    return axios.post('http://localhost:3000/register', user)
  }
}