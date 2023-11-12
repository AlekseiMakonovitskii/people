import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Variables
const url = 'https://random-data-api.com/api/v2/users?size=100';

// types
const SET_VALUE = 'SET VALUE';
const SET_CATEGORY = 'SET CATEGORY';
const FETCH_DATA_LOADING = 'FETCH DATA LOADING';
const FETCH_DATA_SUCCESS = 'FETCH DATA SUCCESS';
const FETCH_DATA_FAILED = 'FETCH DATA FAILED';
const FILTERED_DATA = 'FILTERED DATA';

// action creators
export const setValueAction = value => ({ type: SET_VALUE, payload: value });
export const setCurrentCategoryAction = category => ({
  type: SET_CATEGORY,
  payload: category,
});

export const fetchDataLoading = () => ({
  type: FETCH_DATA_LOADING,
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailed = () => ({
  type: FETCH_DATA_FAILED,
});

export const filteredDataAction = data => {
	return {
		type: FILTERED_DATA,
		payload: data,
	}
}

// async operations
export const fetchDataAsync = () => {
  return async dispatch => {
    dispatch(fetchDataLoading());

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      console.error('Error fetching data:', error);
      dispatch(fetchDataFailed());
    }
  };
};

// reducers
const fetchDataState = {
  globalData: [],
  loading: false,
  error: false,
};

const fetchDataReducer = (state = fetchDataState, action) => {
  const { type, payload } = action;

  if (type === FETCH_DATA_LOADING) {
    return {
      ...state,
      loading: true,
      error: false,
    };
  }

  if (type === FETCH_DATA_SUCCESS) {
    return {
      ...state,
      loading: false,
      globalData: payload,
    };
  }

  if (type === FETCH_DATA_FAILED) {
    return {
      ...state,
      loading: false,
      error: true,
    };
  }

  return state;
};

const inputValueState = {
  value: '',
};

const inputValueReducer = (state = inputValueState, action) => {
  const { type, payload } = action;

  if (type === SET_VALUE) {
    return { ...state, value: payload };
  }

  return state;
};

const currentCategoryState = {
  category: 'name',
};

const currentCategoryReducer = (state = currentCategoryState, action) => {
  const { type, payload } = action;
  if (type === SET_CATEGORY) {
    return { ...state, category: payload };
  }

  return state;
};

const filteredDataState = {
	filteredData: [],
}

const filteredDataReducer = (state = filteredDataState, action) => {
	const {type, payload} = action; 

	if (type ===  FILTERED_DATA) {
		return {
			...state,
			filteredData: payload,
		}
	}
  return state;
};

// root
const rootReducer = combineReducers({
  inputValueReducer,
  currentCategoryReducer,
  fetchDataReducer,
	filteredDataReducer,
});

// store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
