import React, { Component } from 'react';
import './Member.css';

class Member extends Component {
  render() {
    return (
      <span className="member">
        {this.props.id}.{this.props.name}
      </span>
    );
  }
}

export default Member;
