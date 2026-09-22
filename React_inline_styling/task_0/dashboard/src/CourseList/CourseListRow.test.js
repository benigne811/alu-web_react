import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

test('styles a regular row', () => {
  const { container } = render(<table><tbody><CourseListRow textFirstCell="React" textSecondCell="40" /></tbody></table>);
  expect(container.querySelector('tr').style.backgroundColor).toBe('rgba(245, 245, 245, 0.671)');
});

test('styles a header row', () => {
  const { container } = render(<table><thead><CourseListRow isHeader textFirstCell="Course" textSecondCell="Credit" /></thead></table>);
  expect(container.querySelector('tr').style.backgroundColor).toBe('rgba(222, 181, 181, 0.271)');
});
