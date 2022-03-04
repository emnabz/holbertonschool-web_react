import React from 'react'
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import "./Notifications.css";
import NotificationItemShape from "./NotificationItemShape";
import './Notifications.css';

const buttonStyle = {
  position: 'relative',
  float: 'right',
  backgroundColor: 'white',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem'
}

class Notifications extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayDrawer: props.displayDrawer,
            listNotifications: props.listNotifications
        }
        this.markAsRead = this.markAsRead.bind(this)
    }
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }
render(){
  if (this.state.listNotifications.length === 0) {
      return (
          <div className="NotificationContainer">
              <div className="menuItem">
                  <p>Your notifications</p>
              </div>
              {this.state.displayDrawer && <div className="Notifications">
                  <p>No new notification for now</p>
              </div>}
          </div>
      )
  } else {
      return (
          <div className="NotificationContainer">
              <div className="menuItem">
                  <p>Your notifications</p>
              </div>
              { this.state.displayDrawer && <div className="Notifications">
                  <button style={buttonStyle} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
                      <img src={closeIcon} alt='Close'></img>
                  </button>
                  <p>Here is the list of notifications</p>
                  <ul>
                      {this.state.listNotifications.map(notification => <NotificationItem 
                          key={notification.id} 
                          type={notification.type} 
                          value={notification.value} 
                          html={notification.__html}
                          markAsRead = {this.markAsRead}
                          />)}
                    </ul>
                </div> }
            </div>
        )
      }
    } 
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

export default Notifications;
