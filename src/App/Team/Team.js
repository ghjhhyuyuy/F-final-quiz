import React, { Component } from 'react';
import { message, Space } from 'antd';
import Member from '../Member/Member';
import Teacher from '../Teacher/Teacher';

import './Team.css';

class Team extends Component {
  constructor(props) {
    super(props);
    // TODO Feedback: writeName命名太奇怪了，而且不需要存储名字
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
    // TODO Feedback: 不是nvtiveEvent
    if (event.nativeEvent.keyCode === 13) {
      this.sentRequest();
    }
  };

  sentRequest = () => {
    // TODO Feedback: body应该是json对象
    // TODO Feedback: 请求和业务逻辑耦合在一起，建议把获取数据的逻辑提取到单独的方法中
    fetch(`http://localhost:8080/groups/${this.props.id}`, {
      method: 'PATCH',
      mode: 'cors',
      body: this.state.writeName,
    }).then((res) => {
      if (res.ok) {
        this.props.setName(this.props.id, this.state.writeName);
      } else {
        this.setState({
          writeName: this.props.name,
        });
        const error = () => {
          message.error('This is an error message');
        };
        // TODO Feedback: 写法有问题
        <Space>{error}</Space>;
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
      <div className="members" style={{ position: 'relative' }}>
        {this.props.trainees.map((member) => {
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
        {this.props.trainers.map((member) => {
          return <Teacher name={member.name} id={member.id} key={member.id} />;
        })}
        {members}
      </div>
    );
  }
}

export default Team;
