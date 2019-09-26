import constants from '../constants';

const user = (state = {}, action) => {
	switch(action.type) {
		case constants.GET_USERS:
			return state;
		default:
			return state;
	}
}

export default user;