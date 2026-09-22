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
