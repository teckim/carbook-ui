import React from 'react';
import '@testing-library/jest-dom';
import renderWithProviders from '../utils/test-utils';
import CarDetailsPage from '../pages/CarDetailsPage';

describe('CarDetails component', () => {
  const { asFragment } = renderWithProviders(<CarDetailsPage />);
  const firstRender = asFragment();

  it('should render correctly', () => {
    expect(firstRender).toMatchSnapshot();
  });
  it('should render correctly after state change', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
