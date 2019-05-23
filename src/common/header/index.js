import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreaters } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitleWrapper,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
  NavSerarchWrapper
} from './style';

class Header extends Component {
  getListArea = () => {
    const { focused, list, mouseIn, handleMouseEnter, handleMouseLeave } = this.props
    if(focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitleWrapper>
            <SearchInfoTitle>
              热门搜索
            </SearchInfoTitle>
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitleWrapper>
          <SearchInfoList>
          {
            list.map((item)=>{
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })
          }
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
  }
  render() {    
    const { focused, handleBlur, handleFocuse} = this.props
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
                 in={focused} 
                 timeout={200}
                 className="slide"
              >
                <NavSearch 
                  onBlur={handleBlur} 
                  onFocus={handleFocuse} 
                  className={focused ? "focused" : ""}
                ></NavSearch>
              </CSSTransition>
                <i 
                  className={focused ? "focused iconfont iconiconfontzhizuobiaozhun22" : "iconfont iconiconfontzhizuobiaozhun22"}
                ></i>
                {this.getListArea(focused)}
            </NavSerarchWrapper>
          </Nav>
          <Addition>
            <Button className="writting"><i className="iconfont iconicon-checkin"></i>写文章</Button>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused'),
    mouseIn: state.header.get('mouseIn'),
    list: state.header.get('list')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocuse() {
      dispatch(actionCreaters.getList())
      dispatch(actionCreaters.searchFocues())
    },
    handleBlur() {      
      dispatch(actionCreaters.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreaters.listMouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreaters.listMouseLeave())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
