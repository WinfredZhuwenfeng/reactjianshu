import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList,
  writerList: result.writerList
});

const concatHomeMore = (list) => ({
  type: actionTypes.CONCAT_HOME_MORE,
  list
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json').then((res)=>{
      const result = res.data.data;
      dispatch(changeHomeData(result))
    })
  }
}

export const addHomeMore = () => {
  return (dispatch) => {
    axios.get('/api/homeMoreList.json').then((res)=>{
      const result = res.data.data;
      dispatch(concatHomeMore(result))
    })
  }
}
