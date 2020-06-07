import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './join.scss';

import Input from './../Inputs/Input';
import { ChatRoomContext } from '../../contexts/ChatRoomContext';

const Join = () => {
  const { chatRoomInfo, setChatRoomInfo } = useContext(ChatRoomContext);
  const history = useHistory();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    setName(chatRoomInfo.name);
    setRoom(chatRoomInfo.room);
  }, [
    chatRoomInfo.name,
    chatRoomInfo.room
  ]);

  function onSubmit(e) {
    e.preventDefault();

    if (!name || !room) return false;

    setChatRoomInfo({
      name: name,
      room: room
    });

    history.push('/chat');
  }

  return (
    <div className="join">
      <h1 className="join__title">Join A Chat Room</h1>
      <form className="join__form" onSubmit={onSubmit}>
        <Input
          label="Name"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          label="Room"
          name="room"
          placeholder="Room"
          onChange={(e) => setRoom(e.target.value)}
          value={room}
        />
        <button className="join__form-submit mg-top-l" type="submit">Join</button>
      </form>
    </div>
  )
}

export default Join;

