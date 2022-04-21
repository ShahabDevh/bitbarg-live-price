import * as t from './actionTypes';

export const setToToman = () => ({ type: t.SET_SORT_TO_TOMAN });

export const setToTether = () => ({ type: t.SET_SORT_TO_TETHER });

export const setSortToHigh = () => ({ type: t.SET_SORT_LOW_TO_HIGH });

export const setSortToLow = () => ({ type: t.SET_SORT_HIGH_TO_LOW });

export const setSortToDefault = () => ({ type: t.SET_SORT_DEFAULT });

export const setSearchQuery = data => ({ type: t.SET_SEARCH_QUERY, payload: data });
