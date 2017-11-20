import React from 'react';

import Tasks from './Tasks.js';

const Boards = ({data, handleDragOver, handleBoardDragStart, handleBoardDrop, handleTaskDragStart, handleTaskDrop }) => {
  return (
    <div className="boards">
      {data.map((board, index) => {
        return <div className="boards__board" key={`${board.board}${index}`} draggable
                onDragStart={handleBoardDragStart(index)}
                onDragOver={handleDragOver}
                onDrop={handleBoardDrop(index)}
                >
                {board.board}

                <Tasks tasks={board.tasks} board={board.board}
                  handleTaskDragStart={handleTaskDragStart}
                  handleTaskDrop={handleTaskDrop}
                  handleDragOver={handleDragOver}
                />

               </div>
      })}
    </div>
  )
}

export default Boards;
