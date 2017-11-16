import React, { Component } from 'react';

import data from './data/data.js';
import Tasks from './Tasks.js';

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      startBoard: null,
      endBoard: null,
      startTask: null,
      endTask: null,
      startTaskBoard: null
    }
  }

  handleDragStart(e) {
    let startBoard = e.target.getAttribute('index');
    this.setState({
      startBoard: startBoard
    })
  }

  handleDragEnter(e) {
    let endBoard = e.target.getAttribute('index');
    this.setState({
      endBoard: endBoard
    })
  }

  handleDragLeave() {
    this.setState({
      endBoard: null
    })
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  handleDrop() {
    let startBoard = this.state.startBoard;
    let endBoard = this.state.endBoard;
    let data = this.state.data;

    let dataBoardStart = data[startBoard];
    let dataBoardEnd = data[endBoard];

    let newData = data.slice();

    if (startBoard === endBoard || endBoard === undefined || !endBoard) {
      return;
    } else {
      newData.splice(data.indexOf(dataBoardStart), 1, dataBoardEnd);
      newData.splice(data.indexOf(dataBoardEnd), 1, dataBoardStart);

      this.setState({
        data: newData
      })
    }
  }

  handleDragStartTask(startTask, board) {
    this.setState({
      startTask: startTask,
      startTaskBoard: board
    })
  }

  handleDragEnterTask(endTask) {
    this.setState({
      endTask: endTask
    })
  }

  handleDragLeaveTask() {
    this.setState({
      endTask: null
    })
  }

  handleDropTask(board) {
    let startTask = this.state.startTask;
    let endTask = this.state.endTask;
    let startTaskBoard = this.state.startTaskBoard;
    let endTaskBoard = board;
    let data = this.state.data;

    let newData = data.slice();

    let startTaskSuper = startTaskBoard.tasks.find(task => {
      return task.id === parseInt(startTask);
    })

    let endTaskSuper = endTaskBoard.tasks.find(task => {
      return task.id === parseInt(endTask);
    })

    startTaskBoard.tasks.splice(startTaskSuper, 1, endTaskSuper);
    endTaskBoard.tasks.splice(endTaskSuper, 1, startTaskSuper);

    this.setState({
      data: newData
    })
  }

  render() {
    return (
      <div className="boards">
        {this.state.data.map((board, index) => {
          return <div className="boards__board" key={`${board.board}${index}`} board={board.board} index={index} draggable
                  onDragStart={(e) => this.handleDragStart(e)}
                  onDragEnter={(e) =>  this.handleDragEnter(e)}
                  onDragLeave={() => this.handleDragLeave()}
                  onDragOver={(e) => this.handleDragOver(e)}
                  onDrop={() => this.handleDrop()}
                  >
                  {board.board}

                  <Tasks tasks={board.tasks}
                         handleDragStart={(startTask) => this.handleDragStartTask(startTask, board)}
                         handleDragEnter={(endTask) => this.handleDragEnterTask(endTask)}
                         handleDragLeave={() => this.handleDragLeaveTask()}
                         handleDrop={() => this.handleDropTask(board)}/>

                 </div>
        })}
      </div>
    )
  }
}

export default Boards;
