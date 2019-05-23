import React from 'react';
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

const getListArea = (show) => {
  if(show) {
    return (
      <SearchInfo>
        <SearchInfoTitleWrapper>
          <SearchInfoTitle>
            热门搜索
          </SearchInfoTitle>
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitleWrapper>
        <SearchInfoList>
          <SearchInfoItem>区块链</SearchInfoItem>
          <SearchInfoItem>区块</SearchInfoItem>
          <SearchInfoItem>区链</SearchInfoItem>
          <SearchInfoItem>区块链</SearchInfoItem>
          <SearchInfoItem>区块链</SearchInfoItem>
          <SearchInfoItem>区块链</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  }else {
    return null
  }
}

const Header = (props) => {
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
               in={props.focused} 
               timeout={200}
               className="slide"
            >
              <NavSearch 
                onBlur={props.handleBlur} 
                onFocus={props.handleFocuse} 
                className={props.focused ? "focused" : ""}
              ></NavSearch>
            </CSSTransition>
              <i 
                className={props.focused ? "focused iconfont iconiconfontzhizuobiaozhun22" : "iconfont iconiconfontzhizuobiaozhun22"}
              ></i>
              {getListArea(props.focused)}
          </NavSerarchWrapper>
        </Nav>
        <Addition>
          <Button className="writting"><i className="iconfont iconicon-checkin"></i>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
  )
}


const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocuse() {      
      dispatch(actionCreaters.searchFocues())
    },
    handleBlur() {      
      dispatch(actionCreaters.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
