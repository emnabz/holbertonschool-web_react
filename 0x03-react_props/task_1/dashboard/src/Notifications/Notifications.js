import React from 'react'
import './Notifications.css'
import { getLatestNotification } from './utils';


const mybutton = {
    position: 'absolute',
    right: 0,
    top: 10,
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
}

export default function Notifications() {
    return (
    <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
            <li data-priority='default'>New course available</li>
            <li data-priority='urgent'>New resume available</li>
            <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
        </ul>
        <button style={mybutton} aria-label='Close' onClick={() => console.log("when user clicks on the button it logs to the console Close button has been clicked")}>
        <img src={require("./close-icon.png")} alt='close' width="60%" height="50%" ></img>
        </button>
    </div>
    )
}
