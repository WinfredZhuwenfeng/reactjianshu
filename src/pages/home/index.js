import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreaters } from './store'
import { connect } from 'react-redux';
import { ScrollTop } from './styled'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './styled';

class Home extends Component {
  handleScrollTop = () => {    
    document.documentElement.scrollTo(0, 0)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img 
            className="banner-img" 
            src="https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=''
            />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.scrollShow ? <ScrollTop onClick={this.handleScrollTop}>顶部</ScrollTop>: null}        
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changScrollShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changScrollShow)
  }
}

const mapState = (state) => ({
  scrollShow: state.getIn(['home', 'scrollShow'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreaters.getHomeInfo()
    dispatch(action)
  },
  changScrollShow() {
    if(document.documentElement.scrollTop > 200) {
      dispatch(actionCreaters.showScrollTop(true))
    }else {
      dispatch(actionCreaters.showScrollTop(false))
    }
  }
})
export default connect(mapState, mapDispatch)(Home);
