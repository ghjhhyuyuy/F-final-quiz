import React, { Component } from 'react';
import './Teacher.css';

class Teacher extends Component {
  render() {
    return (
      // TODO Feedback: 建议使用业务或功能去命名
      <span className="member bold positon">
        {this.props.id}.{this.props.name}
      </span>
    );
  }
}

export default Teacher;
