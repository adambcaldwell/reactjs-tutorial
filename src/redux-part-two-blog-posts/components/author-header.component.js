import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux/actions';

/**
 * @component class
 * @name AuthorHeader
 * @description user information component
 * @author adam.caldwell
 */
class AuthorHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    if (!this.props.author) return null;

    return <div className="header">{this.props.author.name}</div>;
  }
}

/**
 * Find a specific user
 *
 * @param {Object} state
 * @param {Object} ownProps
 * @returns {{user: *}}
 */
const mapStateToProps = (state, ownProps) => {
  return { author: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(AuthorHeader);
