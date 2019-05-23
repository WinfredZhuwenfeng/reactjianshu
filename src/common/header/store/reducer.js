import * as actionTypes from './constants'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUSE:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      return state.set('list', action.data);
    case actionTypes.LIST_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.LIST_LEAVE:
      return state.set('mouseIn', false);
    default:
      return state;
  }
}
