import React, { Component } from 'react';
import Team from '../Team/Team';
import './GroupList.css';
import request from '../request';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      showGroup: true,
    };
  }

  componentDidMount() {
    request('http://localhost:8080/groups').then((data) => {
      this.setState({
        groups: data,
      });
    });
  }

  getGroupData = () => {
    request('http://localhost:8080/getGroups').then((data) => {
      this.setState({
        groups: data,
      });
    });
  };

  setName = (id, name) => {
    this.state.groups[id].groupName = name;
  };

  render() {
    let groups = null;
    if (this.state.showGroup) {
      groups = (
        <div>
          {this.state.groups.map((group) => {
            return (
              <Team
                name={group.name}
                trainees={group.trainees}
                trainers={group.trainers}
                setName={this.setName}
                id={group.id}
                key={group.groupName}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <div id="header">
          <span>分组列表</span>
          <button type="button" onClick={this.getGroupData}>
            分组学员
          </button>
        </div>
        {groups}
      </div>
    );
  }
}

export default GroupList;
