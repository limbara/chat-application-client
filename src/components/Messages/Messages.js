import React from "react";
import Message from "./Message/Message";

import ScrollToBottom from "react-scroll-to-bottom";

import "./messages.scss";

const Messages = ({ className, messages, name }) => (
  <ScrollToBottom className={`${className} messages`}>
    {messages.map((message, index) => (
      <Message key={`${name}:${message}:${index}`} message={message} name={name} />
    ))}
  </ScrollToBottom>
);

export default Messages;
