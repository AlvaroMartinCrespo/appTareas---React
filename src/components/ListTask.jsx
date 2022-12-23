import React, { useState } from 'react';
import Formulario from './Formulario';
import '../stylesheet/ListTask.css';
import Tarea from './Tarea';

function ListTasks() {
  const [state, setState] = useState([]);

  const agregarTarea = (tarea) => {
    console.log('Tarea agregada');
    console.log(Tarea);
  };

  return (
    <>
      <Formulario />
      <div className="tareas-lista-contenedor">
        {state.map((element) => {
          <Tarea text={element.text} complete={element.complete} />;
        })}
      </div>
    </>
  );
}

export default ListTasks;
