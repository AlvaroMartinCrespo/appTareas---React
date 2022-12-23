import React from 'react';
import Name from './Name';
import '../stylesheet/Page.css';
import Tarea from './Tarea';
import Formulario from './Formulario';

function Page() {
  return (
    <div className="mainContainer">
      <div className="containerNamePage">
        <Name />
      </div>

      <div className="task-list">
        <h1>Task</h1>
        <Tarea text="Aprender React" complete={true} />
      </div>

      <div>
        <Formulario />
      </div>
    </div>
  );
}

export default Page;
