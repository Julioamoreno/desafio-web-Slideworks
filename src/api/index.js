const { create } = require('apisauce');

export const API = create({
	baseURL: process.env.REACT_API_HOST || 'http://localhost:3333',
});
