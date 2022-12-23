import React from 'react';
import '../stylesheet/Formulario.css';

function Formulario() {
  return (
    <div>
      <form className="tarea-form">
        <input
          className="tarea-input"
          type="text"
          placeholder="Escribe una tarea"
          name="texto"
        />
        <button className="tarea-boton">Agregar tarea</button>
      </form>
    </div>
  );
}

export default Formulario;
