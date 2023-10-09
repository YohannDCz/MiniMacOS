import React from 'react';
import '../styles/building.css';

const UnderConstruction = () => {
  return (
    <div>
      <h1 className="under-construction">App still under construction...</h1>
      <img src="../images/tools.png" alt="Basic tools pack" className="tools" />
    </div>
  );
}

export default UnderConstruction;
