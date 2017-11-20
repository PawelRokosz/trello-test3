import React from 'react';

const Tasks = ({tasks, board, handleDragOver, handleTaskDragStart, handleTaskDrop}) => {
  return (
    <div className="boards__tasks">
      {tasks.map((task, index) => {
        return <div className="boards__task" key={`${task.id}${index}`} draggable
                  onDragStart={handleTaskDragStart(task.id, board, index)}
                  onDragOver={handleDragOver}
                  onDrop={handleTaskDrop(task.id, board, index)}
                >
                {task.task}
               </div>
      })}
    </div>
  )
}

export default Tasks;
