import axios from 'axios';

export const getLivePrice = async query =>
	axios.get(`https://api.bitbarg.me/api/v1/currencies${query || ''}`);
