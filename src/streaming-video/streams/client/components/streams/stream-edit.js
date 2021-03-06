import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../redux/actions';
import StreamForm from './stream-form';

/**
 * @component class
 * @name StreamEdit
 * @description
 * @author adam.caldwell
 */
class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit);
