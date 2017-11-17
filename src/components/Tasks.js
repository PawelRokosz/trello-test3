import React from 'react';

const Tasks = ({tasks, board,  handleDragStart, handleDragEnter, handleDragOver, handleDrop}) => {
  return (
    <div className="boards__tasks">
      {tasks.map((task, index) => {
        return <div className="boards__task" key={`${task.task}${index}`} id={task.id} board={board} type="task" draggable
                onDragStart={handleDragStart}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                >
                {task.task}
               </div>
      })}
    </div>
  )
}

export default Tasks;
