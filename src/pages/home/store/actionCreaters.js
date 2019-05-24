import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList,
  writerList: result.writerList
})
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json').then((res)=>{
      const result = res.data.data;
      dispatch(changeHomeData(result))
    })
  }
}
