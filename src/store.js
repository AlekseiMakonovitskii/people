import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// types
const SET_VALUE = 'SET VALUE';
const SET_CATEGORY = 'SET CATEGORY'

// action creators
export const setValueAction = (value) => ({ type: SET_VALUE, payload: value });
export const setCurrentCategoryAction = (category) => ({type: SET_CATEGORY, payload: category});
// export const asyncIncrement = () => {
//   return (dispatch) => {
//     // Simulate an asynchronous operation (e.g., API call)
//     setTimeout(() => {
//       dispatch(increment());
//     }, 1000);
//   };
// };

// reducers
const inputValueState = {
  value: '',
};

const inputValueReducer = (state = inputValueState, action) => {
	const {type, payload} = action;
	
	if (type === SET_VALUE) {
		return {...state, value: payload};
  }	
	
	return state;
};

const currentCategoryState = {
	category: 'name',
}

const currentCategoryReducer = (state = currentCategoryState, action) => {
	const {type, payload} = action;
	if (type === SET_CATEGORY) {
		return {...state, category: payload}
	}


	return state;
}

// root 
const rootReducer = combineReducers({
	inputValueReducer,
	currentCategoryReducer,
})

// store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;