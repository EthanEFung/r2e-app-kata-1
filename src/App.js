
import React, { Component } from 'react';

import SampleContainer from './containers/SampleContainer';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SampleContainer />
      </div>
    );
  }
}

export default App;