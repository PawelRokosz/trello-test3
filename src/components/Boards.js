import React from 'react';

import Tasks from './Tasks.js';

const Boards = ({data, handleDragStart, handleDragEnter, handleDragLeave, handleDragOver, handleDrop}) => {
  return (
    <div className="boards">
      {data.map((board, index) => {
        return <div className="boards__board" key={`${board.board}${index}`} index={index} type="board" draggable
                onDragStart={handleDragStart}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                >
                {board.board}

                <Tasks tasks={board.tasks} board={board.board}
                  handleDragStart={handleDragStart}
                  handleDragEnter={handleDragEnter}
                  handleDragOver={handleDragOver}
                  handleDrop={handleDrop}
                />

               </div>
      })}
    </div>
  )
}

export default Boards;
