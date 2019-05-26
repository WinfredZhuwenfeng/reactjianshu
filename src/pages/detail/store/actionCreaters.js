import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeDetailData = (title, content) => ({
  type: actionTypes.CHANGE_DETAIL_DATA,
  title,
  content
})
export const getDetail = (id) => {
  return (dispatch) => {  
    axios.get('/api/detailData.json?id=' + id).then((res)=>{
      const result = res.data.data;
      dispatch(changeDetailData(result.title, result.content))      
    })
  }
}
