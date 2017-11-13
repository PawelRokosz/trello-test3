import React, { Component } from 'react';

class Task extends Component {

  handleDragStart(e) {
    e.target.classList.add('drag');
    this.props.handleDragStart();
  }

  handleDragEnter(e) {
    e.target.classList.add('over');
  }

  handleDragLeave(e) {
    e.target.classList.remove('over');
  }

  handleDragOver(e) {
    e.preventDefault();
    return false;
  }

  handleDrop(e) {
    this.props.handleDrop();
    e.target.classList.remove('over');
  }

  handleDragEnd(e) {
    e.target.classList.remove('drag');
    this.props.handleDragEnd();
  }

  render() {
    return (
      <div className="lists__task" draggable
        onDragStart={(e) => this.handleDragStart(e)}
        onDragEnter={(e) => this.handleDragEnter(e)}
        onDragLeave={(e) => this.handleDragLeave(e)}
        onDragOver={(e) => this.handleDragOver(e)}
        onDrop={(e) => this.handleDrop(e)}
        onDragEnd={(e) => this.handleDragEnd(e)}
        >
        {this.props.task}
      </div>
    );
  }
}

export default Task;
