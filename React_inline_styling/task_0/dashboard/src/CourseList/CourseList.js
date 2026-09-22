import React from 'react';
import CourseListRow from './CourseListRow';

function CourseList() {
  return (
    <section>
      <h2>Course list</h2>
      <table>
        <thead><CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" /></thead>
        <tbody>
          <CourseListRow textFirstCell="ES6" textSecondCell="60" />
          <CourseListRow textFirstCell="Webpack" textSecondCell="20" />
          <CourseListRow textFirstCell="React" textSecondCell="40" />
        </tbody>
      </table>
    </section>
  );
}

export default CourseList;
