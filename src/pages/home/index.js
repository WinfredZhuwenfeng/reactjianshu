import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './styled';

class Home extends Component {
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
      </HomeWrapper>
    )
  }

  componentDidMount() {
    axios.get('/api/homeData.json').then((res)=>{
      const result = res.data.data;
      const action = {
        type: 'change_home_data',
        articleList: result.articleList,
        recommendList: result.recommendList,
        topicList: result.topicList,
        writerList: result.writerList
      }
      this.props.changeHomeData(action)
    })
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action)
  }
})
export default connect(null, mapDispatch)(Home);
