import React, { Component } from 'react';
import Member from './Member';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          name: '王作文',
        },
        {
          id: 2,
          name: '王林',
        },
        {
          id: 2,
          name: '王江林',
        },
        {
          id: 2,
          name: '王江林',
        },
        {
          id: 2,
          name: '王江林',
        },
        {
          id: 2,
          name: '王江林',
        },
        {
          id: 2,
          name: '王江林',
        },
        {
          id: 2,
          name: '王林',
        },
        {
          id: 2,
          name: '王江林',
        },
        {
          id: 2,
          name: '王江林',
        },
        {
          id: 2,
          name: '王江林',
        },
        {
          id: 2,
          name: '王江林',
        },
        {
          id: 2,
          name: '王江林',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.students.map((student) => {
          return <Member name={student.name} id={student.id} key={student.id} />;
        })}
      </div>
    );
  }
}

export default StudentList;
