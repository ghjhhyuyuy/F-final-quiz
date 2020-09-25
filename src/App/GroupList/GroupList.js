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
    // TODO Feedback: 提供的API应该是auto-grouping
    request('http://localhost:8080/getGroups').then((data) => {
      this.setState({
        groups: data,
      });
    });
  };

  setName = (id, name) => {
    // TODO Feedback: 应该向后台发请求修改名字，而不是前端去修改数据
    this.state.groups[id].groupName = name;
  };

  render() {
    let groups = null;
    // TODO Feedback: 不建议这样写，可以直接用三目表达式
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
        {/* // TODO Feedback: 没有使用语义标签 */}
        {/* // TODO Feedback: 嵌套层次太多 */}
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
