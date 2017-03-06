import React from 'react';
import Message from './message';
import Inbox from './inbox';
import MESSAGES from '../messages';
import {Link} from 'react-router';

export default function Read(props) {
  const messages = Object.keys(MESSAGES.inbox).map((messageId, index) => {
  const message = MESSAGES.inbox[messageId];
  return (
    <li key={index}>
      <Message id={message.id} from={message.from}
      title={message.title}  />
    </li>
  );
});
return(
  <div>
  <div className="inboxTitle">

  </div>
  <ul>
    <Link to={'/Openm'}>
    {messages}
        </Link>
</ul>
  </div>
);

};
//
// <Link to={'/Read/'}>
//  {props.title}
// </Link><br/>
// <Link to={'/Read/'}>
// Inbox
// </Link>
