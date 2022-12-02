import React from 'react';
import '../stylesheet/Name.css';

function Name() {
  const span1 = '<';
  const span2 = 'AMC';
  const span3 = ' />';

  return (
    <div className="containerName">
      <span className="span blue">{span1}</span>
      <span className="span">{span2}</span>
      <span className="span green">{span3}</span>
    </div>
  );
}

export default Name;
