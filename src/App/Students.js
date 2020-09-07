import React, { Component } from 'react';
import Member from './Member';
import './Students.css';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      type: 'button',
      studentName: '',
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

  addStudnet = () => {
    this.setState({ type: 'text' });
  };

  keyDown = (event) => {
    if (event.nativeEvent.keyCode === 13) {
      this.sentRequest();
    }
  };

  sentRequest = () => {
    fetch(`http://localhost:8080/addStudent/${this.state.studentName}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ students: data });
      });
  };

  render() {
    return (
      <div>
        {this.state.students.map((student) => {
          return <Member name={student.name} id={student.id} key={student.id} />;
        })}
        <input
          id="spanButton"
          type={this.state.type}
          value="+添加学员"
          onClick={this.addStudnet}
          onKeyDown={this.keyDown}
        />
      </div>
    );
  }
}

export default StudentList;
