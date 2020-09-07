import React, { Component } from 'react';
import Students from './Students';
import './StudentList.css';

class StudentList extends Component {
  render() {
    return (
      <div className="studentList">
        <span className="studentListName">学员列表</span>
        <Students />
      </div>
    );
  }
}

export default StudentList;
