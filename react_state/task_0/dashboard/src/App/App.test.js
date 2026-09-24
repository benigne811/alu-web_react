import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

test('starts with a hidden notifications drawer and toggles it', () => {
  const { getByText, queryByRole } = render(<App />);

  expect(queryByRole('button', { name: 'Close' })).toBeNull();
  fireEvent.click(getByText('Your notifications'));
  expect(queryByRole('button', { name: 'Close' })).not.toBeNull();

  fireEvent.click(queryByRole('button', { name: 'Close' }));
  expect(queryByRole('button', { name: 'Close' })).toBeNull();
});
