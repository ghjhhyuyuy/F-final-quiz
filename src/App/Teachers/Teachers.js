import React, { Component } from 'react';
import Member from '../Member/Member';
import './Teachers.css';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      type: 'button',
      studentName: '+添加讲师',
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/trainers?grouped=false')
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
    fetch(`http://localhost:8080/trainerss`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ name: this.state.studentName }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          students: data,
          type: 'button',
          studentName: '+添加讲师',
        });
      });
  };

  restyle = () => {
    this.setState({
      type: 'button',
      studentName: '+添加讲师',
    });
  };

  changeName = (event) => {
    this.setState({
      studentName: event.target.value,
    });
  };

  render() {
    return (
      <div className="studentList">
        <span className="studentListName">讲师列表</span>
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

export default Students;
