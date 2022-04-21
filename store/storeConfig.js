import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// initial states here
const initialState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
	rootReducer,
	initialState,
	process.env.NODE_ENV === 'development'
		? composeWithDevTools(applyMiddleware(...middleware))
		: applyMiddleware(...middleware)
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
