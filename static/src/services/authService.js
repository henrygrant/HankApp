import axios from 'axios';

export default {
    login: (user) => {
        return axios.post('http://localhost:3000/login', user)
            .then(resp => {
                console.log(resp)
                if (resp.data.token) {
                    localStorage.setItem('user', JSON.stringify(resp.data));
                }
                return resp.data
            })
    },
    logout: () => {
        localStorage.removeItem('user');
    },
    register: (user) => {
        return axios.post('http://localhost:3000/register', user)
    }
}