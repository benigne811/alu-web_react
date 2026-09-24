import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, value }) {
  return <li data-notification-type={type}>{value}</li>;
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
};

export default NotificationItem;
