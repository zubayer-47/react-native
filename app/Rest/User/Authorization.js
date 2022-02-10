import axios from '../axios';

class Authorization {
	async login(obj) {
		try {
			const result = await axios.post(`ur/login`, obj);
			return result.data;
		} catch (error) {
			return error.response.data.error;
		}
	}
}

export default new Authorization();
