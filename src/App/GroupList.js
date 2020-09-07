import React, { Component } from 'react';
import Team from './Team';
import './GroupList.css';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [
        {
          name: 'Team1',
          members: [
            {
              id: 1,
              name: '王作文',
            },
            {
              id: 2,
              name: '王江林',
            },
          ],
        },
        {
          name: 'Team2',
          members: [
            {
              id: 1,
              name: '王作文',
            },
            {
              id: 2,
              name: '王江林',
            },
          ],
        },
        {
          name: 'Team3',
          members: [
            {
              id: 1,
              name: '王作文',
            },
            {
              id: 2,
              name: '王江林',
            },
          ],
        },
        {
          name: 'Team4',
          members: [
            {
              id: 1,
              name: '王作文',
            },
            {
              id: 2,
              name: '王江林',
            },
          ],
        },
        {
          name: 'Team5',
          members: [
            {
              id: 1,
              name: '王作文',
            },
            {
              id: 2,
              name: '王江林',
            },
          ],
        },
        {
          name: 'Team6',
          members: [
            {
              id: 1,
              name: '王作文',
            },
            {
              id: 2,
              name: '王江林',
            },
          ],
        },
      ],
      showGroup: true,
    };
  }

  render() {
    let groups = null;
    if (this.state.showGroup) {
      groups = (
        <div>
          {this.state.groups.map((group) => {
            return <Team name={group.name} members={group.members} key={group.name} />;
          })}
        </div>
      );
    }
    return (
      <div>
        <div id="header">
          <span>分组列表</span>
          <button type="button">分组学员</button>
        </div>
        {groups}
      </div>
    );
  }
}

export default GroupList;
