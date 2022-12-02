import React from 'react';
import Name from './Name';
import '../stylesheet/Page.css';

function Page() {
  return (
    <div className="mainContainer">
      
      <div className="containerNamePage">
        <Name />
      </div>

      <div></div>
    </div>
  );
}

export default Page;
