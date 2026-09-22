import React from 'react';
import PropTypes from 'prop-types';

function BodySectionWithMarginBottom({ title, children }) {
  return <section><h2>{title}</h2>{children}</section>;
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = { children: null };

export default BodySectionWithMarginBottom;
