/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../app/store';

const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <Router>
      <Provider store={store}>
        {children}
      </Provider>
    </Router>
  );

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
