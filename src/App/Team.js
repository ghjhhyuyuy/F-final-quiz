import React, { Component } from 'react';
import Member from './Member';

class Team extends Component {
  render() {
    const members = (
      <div>
        {this.props.members.map((menber) => {
          return <Member name={menber.name} id={menber.id} key={menber.id} />;
        })}
      </div>
    );
    return (
      <div>
        <div>{this.props.name}</div>
        {members}
      </div>
    );
  }
}

export default Team;
