import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Notifications from './Notifications';

test('calls handleDisplayDrawer when the menu item is clicked', () => {
  const handleDisplayDrawer = jest.fn();
  const { getByText } = render(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);

  fireEvent.click(getByText('Your notifications'));
  expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
});

test('calls handleHideDrawer when the close button is clicked', () => {
  const handleHideDrawer = jest.fn();
  const { getByLabelText } = render(<Notifications displayDrawer handleHideDrawer={handleHideDrawer} />);

  fireEvent.click(getByLabelText('Close'));
  expect(handleHideDrawer).toHaveBeenCalledTimes(1);
});
