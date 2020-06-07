import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import io from "socket.io-client";
import { ChatRoomContext } from "../../contexts/ChatRoomContext";

import ChatInfoBar from "./../ChatInfoBar/ChatInfoBar";
import ChatInputBar from "./../ChatInputBar/ChatInputBar";
import Messages from "./../Messages/Messages";
import ChatInfoContainer from "./../ChatInfoContainer/ChatInfoContainer";

import "./chat.scss";

let socket;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const { chatRoomInfo, clearChatRoomInfo } = useContext(ChatRoomContext);
  const history = useHistory();
  const ENDPOINT = process.env.REACT_APP_SERVER_URL;

  function createSocket(endpoint) {
    console.log(endpoint);
    socket = io(endpoint);
  }

  function destroySocket() {
    if(!socket) return;

    socket.disconnect();
    socket.off();
  }

  useEffect(() => {
    const { name, room } = chatRoomInfo;
    if (!name || !room) {
      destroySocket();
      history.replace("/");
      return;
    }

    createSocket(ENDPOINT);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
        history.replace("/");
      }
    });

    return () => {
      destroySocket();
    };
  }, [ENDPOINT, chatRoomInfo, history]);

  useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        setMessages((messages) => {
          return [...messages, message];
        });
      });

      socket.on("roomData", ({ room, users }) => {
        setUsers(users);
        console.log(users);
      });
    }
  }, []);

  function onChatInfoBarCloseClick() {
    clearChatRoomInfo();

    history.replace("/");
  }

  function sendMessage() {
    if (message === "") return;

    socket.emit("sendMessage", message, () => {
      setMessage("");
    });
  }

  return (
    <main className="chat">
      <div className="chat__chat-box">
        <ChatInfoBar
          className="chat__chat-info-bar"
          room={chatRoomInfo.room}
          onCloseClick={onChatInfoBarCloseClick}
        ></ChatInfoBar>
        <br></br>
        <Messages
          className="chat__chat-messages"
          messages={messages}
          name={chatRoomInfo.name}
        ></Messages>
        <ChatInputBar
          className="chat__chat-input-bar"
          message={message}
          sendMessage={sendMessage}
          setMessage={setMessage}
        />
      </div>
      <div className="chat__chat-info">
        <ChatInfoContainer users={users} name={chatRoomInfo.name} />
      </div>
    </main>
  );
};
export default Chat;
