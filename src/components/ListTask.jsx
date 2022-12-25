import React, { useState } from 'react';
import Formulario from './Formulario';
import '../stylesheet/ListTask.css';
import Tarea from './Tarea.jsx';

function ListTasks() {
  const [state, setState] = useState([]);

  /**
   * Esta función sirve para almacenar una tarea en el state
   * @param {*} tarea
   */
  const agregarTarea = (tarea) => {
    if (tarea.text !== '') {
      tarea.text = tarea.text.trim();
      const tareaActualizadas = [tarea, ...state];
      setState(tareaActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    console.log(id);
    setState(
      state.filter((element) => {
        return element.id !== id;
      })
    );
  };

  const completarTarea = (id) => {
    const tareaComplete = state.find((element) => {
      if (element.id === id) {
        return (element.complete = true);
      }
    });
    setState([
      tareaComplete,
      ...state.filter((element) => {
        return element.id !== id;
      }),
    ]);
  };

  return (
    <>
      <Formulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {state.map((element) => {
          return (
            <Tarea
              key={element.id}
              id={element.id}
              text={element.text}
              complete={element.complete}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          );
        })}
      </div>
    </>
  );
}

export default ListTasks;
