import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultItem: { color: '#000' },
  urgentItem: { color: '#e0354b' },
});

function NotificationItem({ type = 'default', value = '', html = '' }) {
  const itemStyle = type === 'urgent' ? styles.urgentItem : styles.defaultItem;
  return <li className={css(itemStyle)} data-notification-type={type}>{html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : value}</li>;
}

NotificationItem.propTypes = { type: PropTypes.string, value: PropTypes.string, html: PropTypes.string };
export default NotificationItem;
