import { CHANGE_FILTER } from '../actions/actionTypes';

const filterDefaultState = { filter: 'All' };
const filterReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default filterReducer;
