import Axios from '../axios';

class Authorization {
	async login(obj) {
		try {
			const result = await Axios.post(`/login`, obj);
			return result;
		} catch (error) {
			// return error.response.data.error;
			console.log(error);
		}
	}

	async register(data) {
		try {
			const res = await Axios.post('/register', data)
			return res
		} catch (error) {
			console.log(error);
		}
	}

	async query(query) {
		try {
			const res = await Axios.get(`/home/${query}`);

			return res;
		} catch (error) {
			console.log(error);
		}
	}
}

export default new Authorization();
