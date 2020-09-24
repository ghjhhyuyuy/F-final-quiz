import React, { Component } from 'react';
import './App.scss';
import GroupList from './GroupList/GroupList';
import Students from './Students/Students';
import Teachers from './Teachers/Teachers';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <Teachers />
        <Students />
      </div>
    );
  }
}

export default App;
