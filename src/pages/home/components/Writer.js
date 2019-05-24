import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem } from '../styled';

class Writer extends Component {
  render() {
    const { writerList } = this.props;
    return (
      <WriterWrapper>
        {
          writerList.map((item)=>(
            <WriterItem key={item.get('id')}>{item.get('niceName')}</WriterItem>
          ))
        }
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  writerList: state.getIn(['home', 'writerList'])
});

export default connect(mapState, null)(Writer);
