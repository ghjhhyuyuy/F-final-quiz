import React, { Component } from 'react';
import Member from './Member';

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

  render() {
    return (
      <div>
        {this.state.students.map((student) => {
          return <Member name={student.name} id={student.id} key={student.id} />;
        })}
        <span className="member">+添加学员</span>
      </div>
    );
  }
}

export default StudentList;
