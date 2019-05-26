import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  DetailWrapper,
  Header,
  Content
} from './styled';

class detail extends Component {
  render() {
    const { header, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{header}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }
}

const mapState = (state) => ({
  header: state.getIn(['detail', 'header']),
  content: state.getIn(['detail', 'content'])
})

export default connect(mapState, null)(detail);
