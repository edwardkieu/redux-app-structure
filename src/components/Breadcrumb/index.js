import React, { Component } from 'react';

export default class Breadcrumb extends Component {
  render() {
    const {title} = this.props
    return title && <h1 className="h3 mb-4 text-gray-800">{title}</h1>;
  }
}
