import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test('uses the default style by default', () => {
  const { container } = render(<NotificationItem value="Message" />);
  expect(container.querySelector('li').className).not.toBe('');
});

test('renders urgent notifications', () => {
  const { container } = render(<NotificationItem type="urgent" value="Urgent" />);
  expect(container.querySelector('li')).toHaveAttribute('data-notification-type', 'urgent');
  expect(container.querySelector('li').className).not.toBe('');
});
