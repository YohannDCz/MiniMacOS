
import React, { useEffect, useState } from 'react';

const Restart: React.FC = () => {
  const [progress, setProgress] = useState(0);

  const move = () => {
    if (progress === 0) {
      setProgress(1);
      let width = 1;
      
      const frame = () => {
        if (width >= 100) {
          clearInterval(id);
          setProgress(0);
          window.location.href = '../../index.html'; // Use the appropriate URL
        } else {
          width++;
          setProgress(width);
        }
      }
      const id = setInterval(frame, 40);
    }
  };

  useEffect(() => {
    move();
  }, []); // Run the move function only once on component mount

  return (
    <div className="black">
      <img className="apple-logo" src="/public/apple_logotype.png" alt="" />
      <div id="progress">
        <div id="bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Restart;
