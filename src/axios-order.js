import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-fd186.firebaseio.com/',
});

export default instance;