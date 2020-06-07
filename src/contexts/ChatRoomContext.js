import React, { useState, createContext } from 'react';

export const ChatRoomContext = createContext();

export const DEFAULT_STATE = {
  name: '',
  room: ''
};

const ChatRoomContextProvider = (props) => {
  const [chatRoomInfo, setChatRoomInfo] = useState(DEFAULT_STATE);

  function clearChatRoomInfo() {
    setChatRoomInfo(DEFAULT_STATE);
  }

  return (
    <ChatRoomContext.Provider value={{ chatRoomInfo, setChatRoomInfo, clearChatRoomInfo }}>
      {props.children}
    </ChatRoomContext.Provider>
  )
}

export default ChatRoomContextProvider;