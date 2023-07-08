import React from 'react';

const ScreenSaver: React.FC = () => {
  const restart = () => {
    window.location.href = '../../index.html'; // Use the appropriate URL
  };

  return (
    <>
      <video src="/public/screen-saver.mp4" autoPlay loop onClick={restart}></video>
    </>
  );
};

export default ScreenSaver;
