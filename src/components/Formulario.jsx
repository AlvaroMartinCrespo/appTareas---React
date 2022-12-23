import React, { useState } from 'react';
import '../stylesheet/Formulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario() {
  const [state, setState] = useState('');

  const manejarCambio = (e) => {
    setState(e.target.value);
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log(state);
    const tareaNueva = {
      id: uuidv4(),
      text: state,
      complete: false,
    };

    console.log(tareaNueva);
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
        <button className="tarea-boton">Agregar tarea</button>
      </form>
    </div>
  );
}

export default Formulario;
