import React from "react";

const Notifications = ({
  notifications,
  refreshNotifications,
}) => {
  return (
    <div className="page">
      <h1>Notifications</h1>

      <button
        className="button"
        onClick={refreshNotifications}
      >
        Refresh Notifications
      </button>

      <div className="notifications">
        {notifications.map(
          (notification) => (
            <div
              key={notification.id}
              className="notification"
            >
              {notification.message}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Notifications;