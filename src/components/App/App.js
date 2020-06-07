import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ChatRoomContextProvider from './../../contexts/ChatRoomContext';

import Chat from './../Chat/Chat';
import Join from './../Join/Join';

const App = () => (
  <Router>
    <ChatRoomContextProvider>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </ChatRoomContextProvider>
  </Router >
);

export default App;
