import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  header: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_DETAIL_DATA:
      return state.merge({
        header: fromJS(action.title),
        content: fromJS(action.content)
      })
    default:
      return state;
  }
}
