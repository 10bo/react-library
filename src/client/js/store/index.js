import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(
	rootReducer,
	{
		user: { id: 5, name: 'Callum' }
	}
);

export default store;