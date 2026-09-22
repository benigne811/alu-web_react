import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = { backgroundColor: '#f5f5f5ab' };
const headerStyle = { backgroundColor: '#deb5b545' };

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell }) {
  return <tr style={isHeader ? headerStyle : rowStyle}>{isHeader ? <><th>{textFirstCell}</th><th>{textSecondCell}</th></> : <><td>{textFirstCell}</td><td>{textSecondCell}</td></>}</tr>;
}

CourseListRow.propTypes = { isHeader: PropTypes.bool, textFirstCell: PropTypes.string.isRequired, textSecondCell: PropTypes.string.isRequired };
export default CourseListRow;
