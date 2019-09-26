import constants from '../constants';

export const getUsers = () => dispatch => {
	dispatch({ type: constants.GET_USERS })
}