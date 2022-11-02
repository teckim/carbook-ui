import React from 'react';
import '@testing-library/jest-dom';
import renderWithProviders from '../utils/test-utils';
import LoginForm from '../features/auth/components/LoginFrom';

describe('Login component', () => {
  const { asFragment } = renderWithProviders(<LoginForm />);
  const firstRender = asFragment();

  it('should render correctly', () => {
    expect(firstRender).toMatchSnapshot();
  });
});
