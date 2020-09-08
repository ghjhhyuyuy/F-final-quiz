import React, { Component } from 'react';
import Team from './Team';
import './GroupList.css';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      showGroup: true,
    };
  }

  getGroupData = () => {
    fetch('http://localhost:8080/getGroups')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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
                name={group.groupName}
                members={group.members}
                setName={this.setName}
                id={group.groupId}
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
