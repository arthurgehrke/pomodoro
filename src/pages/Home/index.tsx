import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div className="flex mx-auto p-8">
        <h1>Content</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
