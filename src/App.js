import React, { Component } from 'react';
import './assets/styles/css/main.css';

import data from './components/data/data.js';
import Boards from './components/Boards';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        data: null,
        startBoardIndex: null,
        startTaskId: null,
        startTaskIndex: null,
        startTaskBoard: null
      }
  }

  handleDragOver = (e) => {
    e.preventDefault();
  }

  handleBoardDragStart = index => (e) => {
    e.stopPropagation()
    this.setState({ startBoardIndex: index })
  }

  handleBoardDrop = index => (e) => {
    e.stopPropagation()
    const { startBoardIndex, data } = this.state

    const startBoard = data[startBoardIndex]

    if (startBoard === undefined) {
      return;
    }

    let newData = data.slice()

    newData.splice(startBoardIndex, 1)

    newData = [
      ...newData.slice(0, index),
      startBoard,
      ...newData.slice(index)
    ]

    this.setState((previousState) => {
      return {...previousState, data: newData};
    })
  }

  handleTaskDragStart = (id, board, index) => (e) => {
    e.stopPropagation()
    const { data } = this.state

    const startTaskBoard = data.find(boards => {
      return boards.board === board;
    })

    this.setState({
      startTaskId: id,
      startTaskIndex: index,
      startTaskBoard
    })
  }

  handleTaskDrop = (id, board, index) => (e) => {
    e.stopPropagation()
    const { startTaskId, startTaskIndex, startTaskBoard, data } = this.state

    let newData = data.slice();

    let endTaskBoard = newData.find(boards => {
      return boards.board === board;
    })

    const startTask = startTaskBoard.tasks.find(task => {
      return task.id === startTaskId;
    })

    newData[newData.indexOf(startTaskBoard)].tasks.splice(startTaskIndex, 1);

    endTaskBoard.tasks = [
      ...endTaskBoard.tasks.slice(0, index),
      startTask,
      ...endTaskBoard.tasks.slice(index)
    ]

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
          handleBoardDragStart={this.handleBoardDragStart}
          handleBoardDrop={this.handleBoardDrop}
          handleDragOver={this.handleDragOver}
          handleTaskDragStart={this.handleTaskDragStart}
          handleTaskDrop={this.handleTaskDrop}
        />

  		</div>
    );
  }
}

export default App;
