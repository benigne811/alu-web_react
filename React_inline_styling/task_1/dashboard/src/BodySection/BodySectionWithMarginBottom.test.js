import React from 'react';
import { render } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

test('renders the title and children', () => {
  const { getByText } = render(<BodySectionWithMarginBottom title="Title">Content</BodySectionWithMarginBottom>);
  expect(getByText('Title')).toBeInTheDocument();
  expect(getByText('Content')).toBeInTheDocument();
});
