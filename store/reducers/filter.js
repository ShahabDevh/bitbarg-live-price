import * as t from '../actions/actionTypes';

const initial = {
	query: '',
	sort: '', // 1:low to high  2:hight to low
	unitPrice: 'toman',
	// maybe page
};

export const filterReducer = (state = initial, action) => {
	switch (action.type) {
		case t.SET_SEARCH_QUERY:
			return { ...state, query: action.payload };

		case t.SET_SORT_DEFAULT:
			return { ...state, sort: '' };
		case t.SET_SORT_LOW_TO_HIGH:
			return { ...state, sort: 1 };
		case t.SET_SORT_HIGH_TO_LOW:
			return { ...state, sort: 2 };

		case t.SET_SORT_TO_TOMAN:
			return { ...state, unitPrice: 'toman' };
		case t.SET_SORT_TO_TETHER:
			return { ...state, unitPrice: 'tether' };

		default:
			return state;
	}
};
