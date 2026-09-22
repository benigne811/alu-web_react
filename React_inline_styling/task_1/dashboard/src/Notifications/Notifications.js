import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

const styles = StyleSheet.create({ panel: { margin: '2rem', border: '1px solid #e0354b', padding: '1rem' } });

function Notifications() {
  return <section className={css(styles.panel)}><h2>Notifications</h2><ul><NotificationItem type="default" value="New course available" /><NotificationItem type="urgent" value="Your subscription is expiring soon" /></ul></section>;
}

export default Notifications;
