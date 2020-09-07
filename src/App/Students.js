import React, { Component } from 'react';
import Member from './Member';
import './Students.css';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/getStudents')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ students: data });
      });
  }

  addStudnet = () => {};

  render() {
    return (
      <div>
        {this.state.students.map((student) => {
          return <Member name={student.name} id={student.id} key={student.id} />;
        })}
        <button id="spanButton" type="button" onClick={this.addStudnet}>
          +添加学员
        </button>
      </div>
    );
  }
}

export default StudentList;
