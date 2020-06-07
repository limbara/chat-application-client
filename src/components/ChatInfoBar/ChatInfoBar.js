import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './chatinfobar.scss';

const ChatInfoBar = ({ className, room, onCloseClick }) => {
  return (
    <div className={`${className} chatinfobar`}>
      <div className="chatinfobar__info-container">
        <h3>{room}</h3>
      </div>
      <div className="chatinfobar__actions-container">
        <FontAwesomeIcon icon={faTimes} className="chatinfobar__action-button" onClick={onCloseClick} />
      </div>
    </div>
  );
}

export default ChatInfoBar;