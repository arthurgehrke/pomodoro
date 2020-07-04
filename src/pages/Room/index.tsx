import React from 'react';

import Header from '../../components/Header';
import PomodoroClock from '../../components/PomodoroClock';
import Footer from '../../components/Footer';

const Room: React.FC = () => {
  return (
    <div className="flex-col-reverse">
      <Header />
      <PomodoroClock />
      <Footer />
    </div>
  );
};

export default Room;
