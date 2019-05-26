import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreaters } from './store';
import { actionCreaters as loginActionCreaters } from '../../pages/login/store';
import { Link } from 'react-router-dom';
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

class Header extends PureComponent {
  getListArea() {
    const { focused, list, mouseIn, page, totalPage, handleMouseEnter, handleMouseLeave, handleSwitchClick } = this.props;
    const jsList = list.toJS();
    const pageList = [];
    if(jsList.length) {      
      for(let i = (page - 1) * 9; i < page * 9; i++) {
        pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
      }
    }
    if(focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitleWrapper>
            <SearchInfoTitle>
              热门搜索
            </SearchInfoTitle>
            <SearchInfoSwitch 
              onClick={()=>(handleSwitchClick(page, totalPage, this.spinIcon))}
            >
              <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont iconspin"></i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitleWrapper>
          <SearchInfoList>
          {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
  }
  render() {    
    const { focused, list, handleBlur, handleFocuse, loginState, logout } = this.props
    return (
      <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left"><i className="iconfont iconzhinanzhen"></i>首页</NavItem>
            <NavItem className="left"><i className="iconfont iconshouji"></i>下载App</NavItem>
            <NavItem className="right"><i className="iconfont iconAa"></i></NavItem>
            <NavItem className="right"><i className="iconfont iconzuanshi"></i>会员</NavItem>
            {loginState ? 
              <NavItem className="right" onClick={logout}>退出</NavItem> : 
              <Link to="/login"><NavItem className="right" >登录</NavItem></Link>
            }
            <NavSerarchWrapper>
              <CSSTransition
                 in={focused} 
                 timeout={200}
                 className="slide"
              >
                <NavSearch 
                  onBlur={handleBlur} 
                  onFocus={()=>(handleFocuse(list))} 
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
            <Link to='postarc'>
              <Button className="writting"><i className="iconfont iconicon-checkin"></i>写文章</Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    loginState: state.getIn(['login', 'loginState'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocuse(list) {
      console.log(list)
      list.size === 0 && dispatch(actionCreaters.getList())      
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
    },
    handleSwitchClick(page, totalPage, spin) {
      
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      console.log(originAngle);
      if(originAngle) {
        originAngle = parseInt(originAngle, 10)
      }else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) +'deg)';
      if(page < totalPage) {
        dispatch(actionCreaters.ListSwitchClick(page+1))
      }else {
        dispatch(actionCreaters.ListSwitchClick(1))
      }
    },
    logout() {
      dispatch(loginActionCreaters.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
