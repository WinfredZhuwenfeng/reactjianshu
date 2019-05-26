import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreaters } from './store';
import { LoginWrapper, LoginBox, Input, Button } from './styled';

class Login extends PureComponent {
  render() {
    const { loginState } = this.props;
    console.log(loginState)
    if(!loginState) {      
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='ID' ref={(account)=>{this.account = account}}></Input>
            <Input placeholder='pwd' ref={(pwd)=>{this.pwd = pwd}}></Input>
            <Button onClick={()=>{this.props.login(this.account.value, this.pwd.value)}}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      return <Redirect to="/" />
    }
  }
}

const mapState = (state) => ({
  loginState: state.getIn(['login', 'loginState'])
})

const mapDispatch = (dispatch) => ({
  login(account, pwd) {
    // console.log(account, pwd)
    dispatch(actionCreaters.login(account, pwd))
  }
})
export default connect(mapState, mapDispatch)(Login);
