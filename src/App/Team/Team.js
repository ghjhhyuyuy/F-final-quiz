import React, { Component } from 'react';
import Member from '../Member/Member';
import './Team.css';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      writeName: this.props.name,
    };
  }

  addName = () => {
    this.setState({
      disabled: false,
      writeName: '',
    });
  };

  keyDown = (event) => {
    if (event.nativeEvent.keyCode === 13) {
      this.sentRequest();
    }
  };

  sentRequest = () => {
    fetch(`http://localhost:8080/updateTeamName/${this.props.id}`, {
      method: 'POST',
      mode: 'cors',
      body: this.state.writeName,
    }).then((res) => {
      if (res.ok) {
        this.props.setName(this.props.id, this.state.writeName);
      } else {
        this.setState({
          writeName: this.props.name,
        });
      }
    });
  };

  changeName = (event) => {
    if (!this.state.disabled) {
      this.setState({
        writeName: event.target.value,
      });
    }
  };

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
        <input
          className="teamName"
          type="text"
          value={this.state.writeName}
          onClick={this.addName}
          onKeyDown={this.keyDown}
          onChange={this.changeName}
        />
        {members}
      </div>
    );
  }
}

export default Team;
