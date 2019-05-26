import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import {
  DetailWrapper,
  Header,
  Content
} from './styled';

class detail extends PureComponent {
  render() {
    console.log(this.props.match.params.id)
    const { header, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{header}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}


const mapState = (state) => ({
  header: state.getIn(['detail', 'header']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreaters.getDetail(id));
  }
})
export default connect(mapState, mapDispatch)(detail);
