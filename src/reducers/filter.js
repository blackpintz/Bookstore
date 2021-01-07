import { CHANGE_FILTER } from '../actions/actionTypes';

const filterDefaultState = 'All';
const filterReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
