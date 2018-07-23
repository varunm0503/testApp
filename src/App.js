import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppHeader from './AppHeader';
import AppInfoSection from './AppInfoSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppInfoSection />
      </div>
    );
  }
}

export default App;
