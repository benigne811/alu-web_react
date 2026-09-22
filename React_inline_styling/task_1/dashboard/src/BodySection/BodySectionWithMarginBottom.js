import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({ margin: { marginBottom: '40px' } });

function BodySectionWithMarginBottom({ title, children = null }) {
  return <section className={css(styles.margin)}><h2>{title}</h2>{children}</section>;
}

BodySectionWithMarginBottom.propTypes = { title: PropTypes.string.isRequired, children: PropTypes.node };
export default BodySectionWithMarginBottom;
