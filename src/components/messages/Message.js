import React from 'react';

const Message = ({ fromMe, username, message }) => {
  const _fromMe = fromMe ? 'from-me' : '';

  return (
    <div className={`message ${_fromMe}`}>
      <div className="username">{username}</div>
      <div className="message-body">{message}</div>
    </div>
  );
};

export default Message;
