import React from 'react';
import Message from './message';
import MESSAGES from '../messages';
import {Link} from 'react-router';
export default function Spam(props) {

  const messages = Object.keys(MESSAGES.spam).map((messageId, index) => {
    const message = MESSAGES.spam[messageId]; // this is a proverbial array { 0: {}, 1: {}}
    return (
      <li key={index}>
        <Message id={message.id} from={message.from} title={message.title} />
      </li>
    );
  });
  return(
    <div>
    <div className="inboxTitle">
    </div>
    <ul>
      <Link to={'/Opens/'}>
      {messages}
      </Link>
    </ul>
    </div>
  );

};
