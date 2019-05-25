import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  scrollShow: false
});

const changeHomeData = (state, action) => {
  return state.merge({
        'topicList': fromJS(action.topicList),
        'articleList': fromJS(action.articleList),
        'recommendList': fromJS(action.recommendList),
        'writerList': fromJS(action.writerList)
      })
}

const concatHomeMore = (state, action) => {
  return state.merge({
        'articleList': state.get('articleList').concat(fromJS(action.list)),
        articlePage: fromJS(action.articlePage)
      })
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case actionTypes.CONCAT_HOME_MORE:
      return concatHomeMore(state, action);
    case actionTypes.SHOW_SCROLL:
      return state.set('scrollShow', fromJS(action.scrollShow));
    default:
      return state;
  }
}
