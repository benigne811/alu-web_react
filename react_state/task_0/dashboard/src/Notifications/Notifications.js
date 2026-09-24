import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.displayDrawer !== this.props.displayDrawer;
  }

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <section>
        <h2>Notifications</h2>
        <p onClick={handleDisplayDrawer}>Your notifications</p>
        {displayDrawer && (
          <div className="notifications-panel">
            <button type="button" aria-label="Close" onClick={handleHideDrawer}>x</button>
            <ul>
              <NotificationItem value="New course available" />
              <NotificationItem type="urgent" value="Your subscription is expiring soon" />
            </ul>
          </div>
        )}
      </section>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
