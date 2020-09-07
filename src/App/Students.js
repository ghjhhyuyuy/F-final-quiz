import React, { Component } from 'react';
import Member from './Member';
import './Students.css';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      type: 'button',
      studentName: '+添加学员',
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
    this.setState({
      type: 'text',
      studentName: '',
    });
  };

  keyDown = (event) => {
    if (event.nativeEvent.keyCode === 13) {
      this.sentRequest();
    }
  };

  sentRequest = () => {
    fetch(`http://localhost:8080/addStudent/${this.state.studentName}`, {
      method: 'POST',
      mode: 'cors',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          students: data,
          type: 'button',
          studentName: '+添加学员',
        });
      });
  };

  restyle = () => {
    this.setState({
      type: 'button',
      studentName: '+添加学员',
    });
  };

  changeName = (event) => {
    this.setState({
      studentName: event.target.value,
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
          value={this.state.studentName}
          onClick={this.addStudnet}
          onKeyDown={this.keyDown}
          onChange={this.changeName}
          onBlur={this.restyle}
        />
      </div>
    );
  }
}

export default StudentList;
