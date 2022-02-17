import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://192.168.43.23:7000/api/',
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json',
		
	},
});

export default axiosInstance;
