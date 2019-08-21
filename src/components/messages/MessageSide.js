import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import {
  addChannel,
  getChannels,
  getConversation
} from '../../actions/message';
import { join } from 'path';

const MessageSide = ({
  addChannel,
  getChannels,
  getConversation,
  message: { channels }
}) => {
  useEffect(() => {
    getChannels();
  }, [getChannels]);

  const [recipient, setRecipient] = useState('');

  const onChange = (e) => setRecipient(e.target.value);

  const submitChannel = () => {
    addChannel({ recipient: recipient });
  };

  const joinChannel = (channel) => {
    console.log('Join..');
    getConversation(channel);
  };

  console.log(channels);

  return (
    <div>
      <input
        type="text"
        className="form-control"
        name="recipient"
        value={recipient}
        onChange={(e) => onChange(e)}
        aria-describedby="recipient"
      />
      <button onClick={submitChannel}>New Channel</button>

      <ul>
        {channels.map((channel, index) => (
          <li key={index} onClick={() => joinChannel(channel)}>
            <p>{channel.channelName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: state.message
});

export default connect(
  mapStateToProps,
  { addChannel, getChannels, getConversation }
)(MessageSide);
