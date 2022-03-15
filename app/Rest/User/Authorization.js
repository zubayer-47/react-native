import Axios from '../axios';

class Authorization {
	async login(obj) {
		try {
			const result = await Axios.post(`/login`, obj);
			return result;
		} catch (error) {
			console.log(error);
		}
	}

	async order(payload) {
		try {
			const result = await Axios.post(`/order`, payload)
			return result;
		} catch (error) {
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

	async data() {
		try {
			const res = await (await Axios.get('/data')).data
			return res
		} catch (error) {
			console.log(error);
		}
	}

	async singleData(id) {
		try {
			const res = await (await Axios.get(`/${id}`)).data

			return res
		} catch (error) {
			console.log(error);
		}
	}
}

export default new Authorization();


