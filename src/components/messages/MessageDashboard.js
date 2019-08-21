import React from 'react';

import Messages from './Messages';
import MessageSide from './MessageSide';

const MessageDashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <MessageSide />
        </div>
        <div className="col-md-9">
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default MessageDashboard;
