import React from 'react';
import '@testing-library/jest-dom';
import renderWithProviders from '../utils/test-utils';
import CarsList from '../features/CarsList/CarsList';

describe('Homepage component', () => {
  const { asFragment } = renderWithProviders(<CarsList />);
  const firstRender = asFragment();

  it('should render correctly', () => {
    expect(firstRender).toMatchSnapshot();
  });
  it('should render correctly after state change', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
