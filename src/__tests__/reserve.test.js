import React from 'react';
import '@testing-library/jest-dom';
import renderWithProviders from '../utils/test-utils';
import MyReservationsPage from '../pages/MyReservationsPage';

describe('Reserve component', () => {
  const { asFragment } = renderWithProviders(<MyReservationsPage />);
  const firstRender = asFragment();

  it('should render correctly', () => {
    expect(firstRender).toMatchSnapshot();
  });
  it('should render correctly after state change', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
