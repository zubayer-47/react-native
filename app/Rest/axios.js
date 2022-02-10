import axios from 'axios';
import Base from './Base';

const axiosInstance = axios.create({
	baseURL: Base.URL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

export default axiosInstance;
