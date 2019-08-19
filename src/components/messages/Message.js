import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';

import { loadUser } from '../../actions/auth';

const socket = io('http://localhost:5000');

const Message = ({ auth: { user } }) => {
  useEffect(() => {
    loadUser();
  }, []);

  const [messageData, setMessageData] = useState({
    user: '',
    message: '',
    messages: [{}]
  });

  const { message, messages } = messageData;

  console.log(messages);

  const submitMessage = () => {
    socket.emit('chat', {
      user: user.name,
      message: message
    });
  };

  socket.on('chat', (data) => {
    console.log(data);
    setMessageData({ ...messageData, messages: [...messages, data] });
  });

  const onChange = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

   return user != null && (
    <div className="container">
      <div className="chat-room">
        <div className="chat-window">
          <div id="output">
            {messages.map((data) => (
              <div>
                <span>{data.user}</span>
                <p>{data.message}</p>
              </div>
            ))}
          </div>
        </div>
        <input
          id="message"
          type="text"
          placeholder="Message"
          name="message"
          onChange={(e) => onChange(e)}
        />
        <button onClick={(e) => submitMessage()} id="send">
          Send
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Message);
