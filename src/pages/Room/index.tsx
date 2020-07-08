import React from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Header from '../../components/Header';
import PomodoroClock from '../../components/PomodoroClock';
import Footer from '../../components/Footer';

const Room: React.FC = () => {
  const percentage = 66;

  return (
    <div className="flex-col-reverse">
      <Header />
      <PomodoroClock />
      <CircularProgressbar
        value={66}
        text={`${percentage}%`}
        className="w-32 h-32"
        styles={buildStyles({
          rotation: 0.025,
        })}
      />

      <Footer />
    </div>
  );
};

export default Room;
