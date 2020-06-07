import React from "react";

import "./message.scss";

const Message = ({ message: { text, user }, name }) => {
  let trimmedName = name.trim().toLowerCase();
  let userName = user.toLowerCase();

  let isSendByCurrentUser = userName === trimmedName ? true : false;

  if (isSendByCurrentUser) {
    return (
      <div className="message message--me">
        <p className="message__sender">Me</p>
        <div className="message__container message__container--me">
          <p className="message__text">{text}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="message message--other">
        <div className="message__container message__container--other">
          <p className="message__text">{text}</p>
        </div>
        <p className="message__sender">{userName}</p>
      </div>
    );
  }
};

export default Message;
