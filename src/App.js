import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { mainRouter } from './app/router';

function App() {
  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
}

export default App;
