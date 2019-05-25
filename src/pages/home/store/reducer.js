import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  'topicList': [],
  'articleList': [],
  'recommendList': [],
  'writerList': []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        'topicList': fromJS(action.topicList),
        'articleList': fromJS(action.articleList),
        'recommendList': fromJS(action.recommendList),
        'writerList': fromJS(action.writerList)
      });
    case actionTypes.CONCAT_HOME_MORE:
      return state.merge({
        'articleList': state.get('articleList').concat(fromJS(action.list)),
      })
    default:
      return state;
  }
}
