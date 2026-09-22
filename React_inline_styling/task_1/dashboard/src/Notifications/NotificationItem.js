import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', value = '', html = '' }) {
  return <li data-notification-type={type}>{html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : value}</li>;
}

NotificationItem.propTypes = { type: PropTypes.string, value: PropTypes.string, html: PropTypes.string };
export default NotificationItem;
