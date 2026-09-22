import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

test('calls logOut and alerts when control and h are pressed', () => {
  const logOut = jest.fn();
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

  try {
    render(<App logOut={logOut} />);
    fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

    expect(logOut).toHaveBeenCalledTimes(1);
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
  } finally {
    alertMock.mockRestore();
  }
});

test('does not log out for other key combinations', () => {
  const logOut = jest.fn();
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

  try {
    render(<App logOut={logOut} />);
    fireEvent.keyDown(document, { key: 'h', ctrlKey: false });
    fireEvent.keyDown(document, { key: 'g', ctrlKey: true });

    expect(logOut).toHaveBeenCalledTimes(0);
    expect(alertMock).toHaveBeenCalledTimes(0);
  } finally {
    alertMock.mockRestore();
  }
});

test('removes the key listener when unmounted', () => {
  const logOut = jest.fn();
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  const { unmount } = render(<App logOut={logOut} />);

  unmount();
  fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

  expect(logOut).toHaveBeenCalledTimes(0);
  expect(alertMock).toHaveBeenCalledTimes(0);
  alertMock.mockRestore();
});
