import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { actionCreaters } from './store';
// import { LoginWrapper, LoginBox, Input, Button } from './styled';

class PostArc extends PureComponent {
  render() {
    const { loginState } = this.props;    
    if(loginState) {
      return <div>postArc</div>
    }else {
      return <Redirect to="/login" />
    }
  }
}

const mapState = (state) => ({
  loginState: state.getIn(['login', 'loginState'])
})

export default connect(mapState, null)(PostArc);
