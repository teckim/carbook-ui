import React from 'react';
import '@testing-library/jest-dom';
import renderWithProviders from '../utils/test-utils';
import RegisterFrom from '../features/auth/components/RegisterFrom';

describe('Register component', () => {
  const { asFragment } = renderWithProviders(<RegisterFrom />);
  const firstRender = asFragment();

  it('should render correctly', () => {
    expect(firstRender).toMatchSnapshot();
  });
});
