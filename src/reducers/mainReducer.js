const initialState = {
	projects: [],
	loading: false,
	error: null
};

const getData = (state, action) => ({ ...state, loading: true });
const getDataSuccess = (state, action) => ({ ...state, projects: action.result.items, loading: false });
const getDataError = (state, action) => ({ ...state, error: action.error, loading: false });

export const mainReducer = (state = initialState, action) => {
	const actionMap = {
		GET_DATA: getData,
		GET_DATA_SUCCESS: getDataSuccess,
		GET_DATA_ERROR: getDataError,
	};

	if(actionMap[action.type]) return actionMap[action.type](state, action);

	return state;
};
