import React, { Component } from 'react';
import './App.scss';
import GroupList from './GroupList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
      </div>
    );
  }
}

export default App;
