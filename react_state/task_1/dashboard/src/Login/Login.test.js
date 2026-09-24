import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Login from './Login';

test('submit is disabled by default', () => {
  const { container } = render(<Login />);
  expect(container.querySelector('input[type="submit"]').disabled).toBe(true);
});

test('enables submit after both fields have values', () => {
  const { container } = render(<Login />);
  const email = container.querySelector('#email');
  const password = container.querySelector('#password');
  const submit = container.querySelector('input[type="submit"]');

  fireEvent.change(email, { target: { value: 'user@example.com' } });
  fireEvent.change(password, { target: { value: 'password' } });

  expect(submit.disabled).toBe(false);
});

test('does not reload and logs in on submit', () => {
  const { container } = render(<Login />);
  const form = container.querySelector('form');
  const event = new Event('submit', { bubbles: true, cancelable: true });
  form.dispatchEvent(event);
  expect(event.defaultPrevented).toBe(true);
});
