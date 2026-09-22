import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

test('renders the course list', () => {
  const { getByText } = render(<CourseList />);
  expect(getByText('Course list')).toBeInTheDocument();
  expect(getByText('React')).toBeInTheDocument();
});
