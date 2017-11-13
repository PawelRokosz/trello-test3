import React, { Component } from 'react';

class List extends Component {

  handleDragStart(board, tasks, index) {
    this.props.handleDragStart(board, tasks, index);
  }

  handleDragEnter() {
    this.props.onDragEnter();
  }

  handleDragLeave() {
    this.props.onDragLeave();
  }

  handleDragOver() {
    this.props.onDragOver();
  }

  handleDrop() {
    this.props.onDrop();
  }

  handleDragEnd() {
    this.props.onDragEnd();
  }

  render() {
    console.log(this.props.board, this.props.tasks);

    return (
      <div className="lists__list" draggable
      onDragStart={(board, tasks, index) => this.handleDragStart(this.props.board, this.props.tasks, this.props.index)}
      onDragEnter={() =>  this.handleDragEnter()}
      onDragLeave={() => this.handleDragLeave()}
      onDragOver={() => this.handleDragOver()}
      onDrop={() => this.handleDrop()}
      onDragEnd={() => this.handleDragEnd()}
      >
        <h3 className="lists__title">{this.props.board}</h3>


        <div className="lists__add-task">Add a card...</div>
      </div>
    );
  }
}

export default List;
