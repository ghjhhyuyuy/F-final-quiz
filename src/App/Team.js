import React, { Component } from 'react';
import Member from './Member';
import './Team.css';

class Team extends Component {
  render() {
    const members = (
      <div className="members">
        {this.props.members.map((member) => {
          return <Member name={member.name} id={member.id} key={member.id} />;
        })}
      </div>
    );
    return (
      <div className="team">
        <div className="teamName">{this.props.name}</div>
        {members}
      </div>
    );
  }
}

export default Team;
