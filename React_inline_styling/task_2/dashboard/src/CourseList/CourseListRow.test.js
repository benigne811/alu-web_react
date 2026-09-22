import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

test('applies row and cell styles', () => {
  const { container } = render(<table><tbody><CourseListRow textFirstCell="React" textSecondCell="40" /></tbody></table>);
  expect(container.querySelector('tr').className).not.toBe('');
  expect(container.querySelector('td').className).not.toBe('');
});

test('applies header row and cell styles', () => {
  const { container } = render(<table><thead><CourseListRow isHeader textFirstCell="Course" textSecondCell="Credit" /></thead></table>);
  expect(container.querySelector('tr').className).not.toBe('');
  expect(container.querySelector('th').className).not.toBe('');
});
