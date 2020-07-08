import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
    <svg>
      <circle cx="70" cy="70"/>
    </svg>
  </BrowserRouter>
);

export default App;
