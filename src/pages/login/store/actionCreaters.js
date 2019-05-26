import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  loginState: true
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
  loginState: false
});

export const login = (account, pwd) => {
  return (dispatch) => (
      axios.get('/api/loginData.json?account=' + account + '&pws=' + pwd).then((res)=>{
        const result = res.data.data;
        if(result) {
          dispatch(changeLogin())
        }else {
          alert('登录失败')
        }
      })
      // axios.post('/api/loginData.json',{account, pwd}).then((res)=>{
      //   const result = res.data.data;
      //     if(result) {
      //       dispatch(changeLogin())
      //     }else {
      //       alert('登录失败')
      //     }
      // })
    )
}
