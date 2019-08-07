import React from 'react';

const Progress = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: progress + '%' }} />
    </div>
  );
};

export default Progress;
