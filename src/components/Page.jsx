import React from 'react';
import Name from './Name';
import '../stylesheet/Page.css';
import './ListTask';
import ListTasks from './ListTask';

function Page() {
  return (
    <div className="mainContainer">
      <div className="containerNamePage">
        <Name />
      </div>

      <div className="task-list">
        <h1>Task</h1>
        <ListTasks />
      </div>
    </div>
  );
}

export default Page;
