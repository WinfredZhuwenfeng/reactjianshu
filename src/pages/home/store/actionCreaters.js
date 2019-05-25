import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList,
  writerList: result.writerList
});

const concatHomeMore = (list, articlePage) => ({
  type: actionTypes.CONCAT_HOME_MORE,
  list,
  articlePage: articlePage + 1
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json').then((res)=>{
      const result = res.data.data;
      dispatch(changeHomeData(result))
    })
  }
}

export const addHomeMore = (articlePage) => {
  return (dispatch) => {
    axios.get('/api/homeMoreList.json?page='+ (articlePage + 1)).then((res)=>{
      const result = res.data.data;
      dispatch(concatHomeMore(result, articlePage))
    })
  }
}
