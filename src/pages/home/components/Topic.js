import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../styled'

class Topic extends Component {
  render() { 
    const { topicList } = this.props
    return (
      <TopicWrapper>
        {
          topicList.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img 
                  className="topic-pic" 
                  src={item.get('imgUrl')} 
                  alt=''
                />
                {item.get('topic')}
              </TopicItem>        
            ) 
          })
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})

const mapDispatch = (dispatch) => {
  return {}
}
export default connect(mapState, mapDispatch)(Topic);
