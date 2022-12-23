import React from 'react';
import '../stylesheet/Tarea.css';
import { AiOutlineClose } from 'react-icons/ai';

function Tarea({ text, complete }) {
  return (
    <div className={complete ? 'task-container complete' : 'task-container'}>
      <div className="text-task">{text}</div>
      <div className="container-task-icons">
        <AiOutlineClose className="icon-taks" />
      </div>
    </div>
  );
}

export default Tarea;
