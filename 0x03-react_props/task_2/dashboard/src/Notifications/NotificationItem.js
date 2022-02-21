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
export default NotificationItem;
