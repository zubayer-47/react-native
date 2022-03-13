import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://127.0.0.1:7000/api/',
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json',
		
	},
});

export default axiosInstance;
