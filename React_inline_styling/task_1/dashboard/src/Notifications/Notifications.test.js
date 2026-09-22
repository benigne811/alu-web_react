import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('renders notifications', () => {
  expect(render(<Notifications />).getByText('Notifications')).toBeInTheDocument();
});
