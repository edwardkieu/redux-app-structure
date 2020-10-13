import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class UserPhotoForm extends Component {
  render() {
    return <div>This is photo form</div>;
  }
}

export default connect(mapStateToProps)(UserPhotoForm);
