import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';

const PomodoroClock: React.FC = () => {
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex justify-center mt-32">
      <Clock value={value} className="justify-center" />
    </div>
  );
};

export default PomodoroClock;
