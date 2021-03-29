const { create } = require('apisauce');

export const API = create({
	baseURL:
		process.env.REACT_API_HOST ||
		'https://api-desafioslideworks.herokuapp.com/',
});
