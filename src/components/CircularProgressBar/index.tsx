import React from 'react';

const CircularProgressBar: React.FC = () => {
  return (
    <div className="w-24 h-24 flex flex-col justify-center">
      <div>
        <svg>
          <circle cx="70" cy="70" r="70" />
          <circle cx="70" cy="70" r="70" />
        </svg>
      </div>
      <div>
        <h2>
          87
          <span>Progress</span>
        </h2>
      </div>
    </div>
  );
};

export default CircularProgressBar;
