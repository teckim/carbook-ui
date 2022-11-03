import React from 'react';
import '@testing-library/jest-dom';
import renderWithProviders from '../utils/test-utils';
import MyReservationsPage from '../pages/MyReservationsPage';

describe('CarDetails component', () => {
  const { asFragment } = renderWithProviders(<MyReservationsPage />);
  const firstRender = asFragment();

  it('should render correctly', () => {
    expect(firstRender).toMatchSnapshot();
  });

});
