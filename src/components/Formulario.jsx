import React, { useState } from 'react';
import '../stylesheet/Formulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario({ onSubmit }) {
  const [state, setState] = useState('');

  /**
   * Actualiza el estado con la nueva tarea.
   * @param {*} e evento
   */
  const manejarCambio = (e) => {
    setState(e.target.value);
  };

  /**
   * Recibe un evento objeto, y crea una tarea con las caracteriscas del objeto,
   * y mediante el prop onSubmit, se le pasala función de agregar tarea
   * @param {*} evento evento
   */
  const manejarEnvio = (evento) => {
    //Esta funcion del evento es para que el formulario no se actualice
    evento.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      text: state,
      complete: false,
    };
    onSubmit(tareaNueva);
  };

  /**
   * Esta función a la hora se introducir una nueva tarea se limpia el input
   */
  const clearInput = () => {
    document.querySelector('.tarea-input').value = '';
  };

  return (
    <div>
      <form onSubmit={manejarEnvio} className="tarea-form">
        <input
          className="tarea-input"
          type="text"
          placeholder="Escribe una tarea"
          name="texto"
          onChange={manejarCambio}
        />
        <button onClick={clearInput} className="tarea-boton">
          Agregar tarea
        </button>
      </form>
    </div>
  );
}

export default Formulario;
