import React from "react";

import "./chatinfocontainer.scss";

const ChatInfoContainer = ({ className = "", users, name }) => {
  const sortedUsers = users.sort((a, b) => {
    if (a.name.toLowerCase() === name.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <div className={`${className} chatinfocontainer`}>
      <section className="mg-bottom-m">
        <h1>Realtime Chat</h1>
        <p>Backend created with Express &amp; Socket.io</p>
        <p>Frontend created with React</p>
      </section>
      <section className="mg-bottom-m">
        <h1>Online Users</h1>
        <p>Currently online in this room</p>
        <ul className="chatinfocontainer__users-list">
          {sortedUsers.map((user, index) => {
            return (
              <li key={index} className="chatinfocontainer__user-list-item">
                {user.name}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default ChatInfoContainer;
