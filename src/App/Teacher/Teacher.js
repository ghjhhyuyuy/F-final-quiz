import React, { Component } from 'react';
import './Teacher.css';

class Teacher extends Component {
  render() {
    return (
      <span className="member bold positon">
        {this.props.id}.{this.props.name}
      </span>
    );
  }
}

export default Teacher;
