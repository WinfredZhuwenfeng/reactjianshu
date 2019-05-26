import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  loginState: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('loginState', action.loginState);
    case actionTypes.LOGOUT:
      return state.set('loginState', action.loginState);
    default:
      return state;
  }
}
