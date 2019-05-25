import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListWrapper, ListItem, ListInfo, ListMore } from '../styled'
import { actionCreaters } from '../store';

class List extends Component {
  render() {
    const { articleList, handleAddMore } = this.props
    return (
      <ListWrapper>
        {
          articleList.map((item, index)=>{
            return (
              <ListItem key={index}>
                <img 
                  className="pic" 
                  src={item.get('imgUrl')}
                  alt=""
                />
                <ListInfo>
                  <h3>{item.get('title')}</h3>
                  <p>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <ListMore onClick={handleAddMore}>加载更多</ListMore>
      </ListWrapper>
    )
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
})

const mapDispatch = (dispatch) => ({
  handleAddMore() {      
      dispatch(actionCreaters.addHomeMore())
    }
})
export default connect(mapState, mapDispatch)(List);
