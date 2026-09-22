import React from 'react';
import NotificationItem from './NotificationItem';

function Notifications() { return <section><h2>Notifications</h2><ul><NotificationItem value="New course available" /><NotificationItem type="urgent" value="Your subscription is expiring soon" /></ul></section>; }
export default Notifications;
