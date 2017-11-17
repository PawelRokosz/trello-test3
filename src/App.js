import React, { Component } from 'react';
import './assets/styles/css/main.css';

import data from './components/data/data.js';
import Boards from './components/Boards';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        data: null,
        startPoint: null,
        endPoint: null
      }
  }

  handleDragStart(e) {
    let startPoint = e.target;
    this.setState({ startPoint })
  }

  handleDragEnter(e) {
    let endPoint = e.target;
    this.setState({ endPoint })
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  handleDrop() {
    const {data, startPoint, endPoint} = this.state;
    let newData = data.slice();

    if (startPoint.getAttribute('type') === 'board' && endPoint.getAttribute('type') === 'board') {
      let startBoard = data[startPoint.getAttribute('index')];
      let endBoard = data[endPoint.getAttribute('index')];

      newData.splice(data.indexOf(startBoard), 1, endBoard);
      newData.splice(data.indexOf(endBoard), 1, startBoard);
    }

    if (startPoint.getAttribute('type') === 'task' && endPoint.getAttribute('type') === 'task') {
      let startTaskBoard = newData.find(board => {
        return board.board === startPoint.getAttribute('board');
      })

      let endTaskBoard = newData.find(board => {
        return board.board === endPoint.getAttribute('board');
      })

      let startTask = startTaskBoard.tasks.find(task => {
        return task.id === parseInt(startPoint.getAttribute('id'));
      })

      let endTask = endTaskBoard.tasks.find(task => {
        return task.id === parseInt(endPoint.getAttribute('id'));
      })

      startTaskBoard.tasks.splice(startTaskBoard.tasks.indexOf(startTask), 1, endTask);
      endTaskBoard.tasks.splice(endTaskBoard.tasks.indexOf(endTask), 1, startTask);
    }

    this.setState((previousState) => {
      return {...previousState, data: newData};
    });
  }

  componentWillMount() {
    this.setState({ data })
  }

  render() {
    let { data } = this.state;
    return (
      <div className="app">
        <h2 className="board-title">Welcome Borad</h2>

        <Boards
          data={data}
          handleDragStart={(e) => this.handleDragStart(e)}
          handleDragEnter={(e) => this.handleDragEnter(e)}
          handleDragOver={(e) => this.handleDragOver(e)}
          handleDrop={() => this.handleDrop()}
        />

  		</div>
    );
  }
}

export default App;
