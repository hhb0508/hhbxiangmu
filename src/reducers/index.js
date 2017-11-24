import {combineReducers} from 'redux';
import ListReducer from './ListReducer'
// combineReducers合并多个reducers
const reducers = combineReducers({
	list: ListReducer
})

export default reducers;