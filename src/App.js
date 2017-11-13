import React, { Component } from 'react';
import './assets/styles/css/main.css';

import Boards from './components/Boards';

class App extends Component {

  render() {
    return (
      <div className="app">
        <h2 className="board-title">Welcome Borad</h2>

        <Boards />

  		</div>
    );
  }
}

export default App;
