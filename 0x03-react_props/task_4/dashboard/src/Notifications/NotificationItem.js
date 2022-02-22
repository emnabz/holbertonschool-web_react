import React from 'react';

function NotificationItem({ type, value, html }) {
    let listitem;
    
    if (value) {
        listitem = <li data-notification-type={type}>{value}</li>;
    } else {
        listitem = (
            <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
        );
    }
    return listitem;
}
NotificationItem.defaultProps = {
    type: "default",
    value: "",
    html: {},
  };
  
  NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
  };

export default NotificationItem;
