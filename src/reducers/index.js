import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const allReducers = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});

export default allReducers;
