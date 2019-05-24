import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListWrapper, ListItem, ListInfo } from '../styled'

class List extends Component {
  render() {
    const { articleList } = this.props
    return (
      <ListWrapper>
        {
          articleList.map((item)=>{
            return (
              <ListItem key={item.get('id')}>
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
      </ListWrapper>
    )
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
})

export default connect(mapState)(List);
