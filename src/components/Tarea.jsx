import React from 'react';
import '../stylesheet/Tarea.css';

function Tarea({ text }) {
  return (
    <div className="task-container">
      <div className="text-task">{text}</div>
      <div className="icon-task">Eliminar</div>
    </div>
  );
}

export default Tarea;
