import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';

import { loadUser } from '../../actions/auth';
import { sendMessage } from '../../actions/message';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const socket = io('http://localhost:5000');

const Messages = ({ auth: { user }, sendMessage, message: { channel, messages } }) => {
  useEffect(() => {
    loadUser();
  }, []);

  console.log("memes: ", messages);

  const [messageData, setMessageData] = useState({
    user: '',
    message: '',
    messagesData: [{}]
  });

  const { message, messagesData } = messageData;

  const submitMessage = (e) => {
    e.preventDefault();

    sendMessage({
      channel: channel,
      message: message
    });

    socket.emit('chat', {
      user: user.name,
      message: message
    });

    // Clear message
    setMessageData({
      ...messageData,
      message: ''
    });
  };

  socket.on('chat', (data) => {
    console.log(data);
    setMessageData({
      ...messageData,
      messagesData: [...messagesData, data]
    });
  });

  const onChange = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

  return Object.keys(channel).length !== 0 && (
    user != null && (
      <div className="container">
        <Card id="messsage-output">
          <CardContent>
            {messages.map((message, index) => (
              <div key={index}>
                <span>{message.user}</span>
                <p>{message.body}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <TextareaAutosize
          id="message-input"
          placeholder="Please enter your message..."
          name="message"
          value={message}
          onChange={(e) => onChange(e)}
        />
        <button onClick={(e) => submitMessage(e)} id="send">
          Send
        </button>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  message: state.message
});

export default connect(
  mapStateToProps,
  { sendMessage }
)(Messages);
