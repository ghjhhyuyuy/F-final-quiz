import React, { Component } from 'react';
import Member from './Member';
import './Team.css';

class Team extends Component {
  render() {
    const members = (
      <div className="members">
        {this.props.members.map((menber) => {
          return <Member name={menber.name} id={menber.id} key={menber.id} />;
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
