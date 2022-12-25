import React from 'react';
import '../stylesheet/Tarea.css';
import { AiOutlineClose } from 'react-icons/ai';

function Tarea({ id, text, complete, completarTarea, eliminarTarea }) {

  return (
    <div className={complete ? 'task-container complete' : 'task-container'}>
      <div className="text-task" onClick={() => completarTarea(id)}>
        {text}
      </div>
      <div className="container-task-icons" onClick={() => eliminarTarea(id)}>
        <AiOutlineClose className="icon-taks" />
      </div>
    </div>
  );
}

export default Tarea;
