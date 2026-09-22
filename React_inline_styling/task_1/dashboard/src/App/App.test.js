import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the dashboard', () => {
  const { getByText } = render(<App />);
  expect(getByText('School dashboard')).toBeInTheDocument();
  expect(getByText('Course list')).toBeInTheDocument();
});
