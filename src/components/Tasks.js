import React, { Component } from 'react';

class Tasks extends Component {
  handleDragStart(e) {
    let startTask = e.target.getAttribute('id');
    this.props.handleDragStart(startTask);
  }

  handleDragEnter(e) {
    let endTask = e.target.getAttribute('id');
    this.props.handleDragEnter(endTask);
  }

  handleDragLeave() {
    this.props.handleDragLeave();
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  handleDrop() {
    this.props.handleDrop();
  }

  render() {
    let tasks = this.props.tasks;
    return (
      <div className="boards__tasks">
        {tasks.map((task, index) => {
          return <div className="boards__task" key={`${task.task}${index}`} id={task.id} draggable
                  onDragStart={(e) => this.handleDragStart(e)}
                  onDragEnter={(e) =>  this.handleDragEnter(e)}
                  onDragLeave={() => this.handleDragLeave()}
                  onDragOver={(e) => this.handleDragOver(e)}
                  onDrop={() => this.handleDrop()}
                  >
                  {task.task}
                 </div>
        })}
      </div>
    )
  }
}

export default Tasks;
