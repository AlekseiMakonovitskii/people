import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// types
const SET_VALUE = 'SET VALUE';

// action creators
export const setValueAction = () => ({ type: SET_VALUE });

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



// root 
const rootReducer = combineReducers({
	inputValueReducer,
})

// store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;