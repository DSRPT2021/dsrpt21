import axios from 'axios';

const api = axios.create({
	baseURL: 'https://medness.herokuapp.com',
});

export default api;
