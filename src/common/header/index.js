import React, { Component } from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  NavSerarchWrapper
} from './style';
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
    this.handleFocuse = this.handleFocuse.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left"><i className="iconfont iconzhinanzhen"></i>首页</NavItem>
          <NavItem className="left"><i className="iconfont iconshouji"></i>下载App</NavItem>
          <NavItem className="right"><i className="iconfont iconAa"></i></NavItem>
          <NavItem className="right"><i className="iconfont iconzuanshi"></i>会员</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavSerarchWrapper>
            <CSSTransition
               in={this.state.focused} 
               timeout={200}
               className="slide"
            >
              <NavSearch onBlur={this.handleBlur} onFocus={this.handleFocuse} className={ this.state.focused ? "focused" : ""}></NavSearch>
            </CSSTransition>
              <i className={ this.state.focused ? "focused iconfont iconiconfontzhizuobiaozhun22" : "iconfont iconiconfontzhizuobiaozhun22"}></i>
          </NavSerarchWrapper>
        </Nav>
        <Addition>
          <Button className="writting"><i className="iconfont iconicon-checkin"></i>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  handleFocuse() {
    this.setState({
      focused: true
    })
  }
  handleBlur(){
    this.setState({
      focused: false
    }
    )
  }
}

export default Header
