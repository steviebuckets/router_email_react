import React from 'react';
import Message from './message';
import Inbox from './inbox';
import MESSAGES from '../messages';

export default function Openm(props) {
  const messages = Object.keys(MESSAGES.inbox).map((messageId, index) => {
  const message = MESSAGES.inbox[messageId];
  return (
    <li key={index}>
      <Message id={message.id} from={message.from}
      title={message.title} content={message.content}  />
    </li>
  );
});
return(
  <div>
  <div className="inboxTitle">

  </div>
  <ul>
    {messages}
</ul>
  </div>
);

};
