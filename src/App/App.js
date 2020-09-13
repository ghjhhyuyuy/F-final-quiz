import React, { Component } from 'react';
import './App.scss';
import GroupList from './GroupList/GroupList';
import Students from './Students/Students';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <Students />
      </div>
    );
  }
}

export default App;
