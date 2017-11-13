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
    // console.log('dragLeave');
    this.setState({
      endBoard: null
    })
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  handleDragEnd() {
    // console.log('dragEnd startBoard', this.state.startBoard);
    // console.log('dragEnd endBoard', this.state.endBoard);
    // console.log('DragEnd');

  }

  handleDrop() {
    // console.log('drop')
    let startBoard = this.state.startBoard;
    let endBoard = this.state.endBoard;
    let data = this.state.data;
    // console.log('startBoard', startBoard);
    // console.log('endBoard', endBoard);

    // let dataBoardStart = data.find(board => {
    //   return board.board === startBoard;
    // })
    // let dataBoardEnd = data.find(board => {
    //   return board.board === endBoard;
    // })
    // console.log('dataBoardStart', dataBoardStart);
    // console.log('dataBoardEnd', dataBoardEnd);

    let dataBoardStart = data[startBoard];
    let dataBoardEnd = data[endBoard];
    // console.log('start:', dataBoardStart, 'end:', dataBoardEnd);

    let newData = data.slice();
    // let newDataBoardStart = newData[startBoard];
    // let newDataBoardEnd = newData[endBoard];

    // console.log('newDataBoardStart', newDataBoardStart);
    // console.log('newDataBoardEnd', newDataBoardEnd);

    if (startBoard === endBoard || endBoard === undefined || !endBoard) {
      return;
    } else {
      // console.log('newData1', newData[data.indexOf(dataBoardStart)]);
      // console.log('dataBoardStart', dataBoardStart);
      // console.log('newData2', newData[data.indexOf(dataBoardEnd)]);
      // console.log('dataBoardEnd', dataBoardEnd);

      // newData.splice(newData.indexOf(newDataBoardStart), 1);

      newData[data.indexOf(dataBoardStart)] = dataBoardEnd;
      newData[data.indexOf(dataBoardEnd)] = dataBoardStart;
      //
      // console.log('oldData', this.state.data);
      // console.log('newData', newData);

      this.setState({
        data: newData
      }, () => {
        console.log('oldData post update', this.state.data);
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
                  onDragEnd={() => this.handleDragEnd()}
                  >
                  {board.board}
                 </div>
        })}
      </div>
    )
  }
}

export default Boards;
