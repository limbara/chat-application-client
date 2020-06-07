import React from "react";

import "./chatinputbar.scss";

const ChatInputBar = ({ className, setMessage, message, sendMessage }) => {
  function onClickSend(e) {
    e.preventDefault();

    sendMessage();
  }

  return (
    <div className={`${className} chatinputbar`}>
      <input
        className="chatinputbar__input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && onClickSend(e)}
      ></input>
      <button 
        className="chatinputbar__button" 
        onClick={onClickSend}>
        Send
      </button>
    </div>
  );
};

export default ChatInputBar;
