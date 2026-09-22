import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: { backgroundColor: '#f5f5f5ab' },
  headerRow: { backgroundColor: '#deb5b545' },
  cell: { padding: '0.5rem' },
  headerCell: { padding: '0.5rem', fontWeight: 'bold' },
});

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell }) {
  const cellStyle = isHeader ? styles.headerCell : styles.cell;
  return <tr className={css(isHeader ? styles.headerRow : styles.row)}>{isHeader ? <><th className={css(cellStyle)}>{textFirstCell}</th><th className={css(cellStyle)}>{textSecondCell}</th></> : <><td className={css(cellStyle)}>{textFirstCell}</td><td className={css(cellStyle)}>{textSecondCell}</td></>}</tr>;
}

CourseListRow.propTypes = { isHeader: PropTypes.bool, textFirstCell: PropTypes.string.isRequired, textSecondCell: PropTypes.string.isRequired };
export default CourseListRow;
