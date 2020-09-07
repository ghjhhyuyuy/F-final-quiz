import React, { Component } from 'react';
import Students from './Students';

class StudentList extends Component {
  render() {
    return (
      <div>
        <span>学员列表</span>
        <Students />
      </div>
    );
  }
}

export default StudentList;
