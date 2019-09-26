import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import constants from './constants';

const action = {
	type: constants.GET_USERS,
	payload: {}
}

store.dispatch(action);

console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<h1>
			Welcome
		</h1>
	</Provider>,
	document.getElementById('app')
	);