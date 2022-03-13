import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://192.168.0.106:7000/api/',
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json',
		
	},
});

export default axiosInstance;
