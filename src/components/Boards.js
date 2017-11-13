import React, { Component } from 'react';

import data from './data/data.js';

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      startBoard: null,
      endBoard: null
    }
  }

  handleDragStart(e) {
    let startBoard = e.target.getAttribute('index');
    console.log('startBoard', startBoard)
    this.setState({
      startBoard: startBoard
    })
  }

  handleDragEnter(e) {
    let endBoard = e.target.getAttribute('index');
    console.log('endBoard', endBoard)
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
                 </div>
        })}
      </div>
    )
  }
}

export default Boards;
