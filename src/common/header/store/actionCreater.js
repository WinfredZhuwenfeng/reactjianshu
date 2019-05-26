import * as actionTypes from './constants'
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocues = () => ({
  type: actionTypes.SEARCH_FOCUSE
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const listMouseEnter = () => ({
  type: actionTypes.LIST_ENTER
});

export const listMouseLeave = () => ({
  type: actionTypes.LIST_LEAVE
});

export const ListSwitchClick = (page) => ({
  type: actionTypes.LIST_SWITCH,
  page
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=>{
      const data = res.data      
      dispatch(changeList(data.data))
    }).catch((err)=>{
      console.log(err)
    })
  }
};
