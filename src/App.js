import React, { Suspense } from 'react';
import './App.css';

import AppRoutes from './router';

function App() {

  const Loader = () => (
    <div className="App">
      <div>loading...</div>
    </div>
  );
  return (
    <div className="App">
    <Suspense fallback={<Loader />}>
      <AppRoutes />
    </Suspense>
    </div>
  );
}

export default App;
