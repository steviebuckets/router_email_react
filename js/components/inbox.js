import React from 'react';
import Message from './message';
import MESSAGES from '../messages';


export default function Inbox(props) {

  /*
  I only see that you are props.messages --> messages = variable
  inboxTitle
  */

  const messages = Object.keys(MESSAGES.inbox).map((messageId, index) => {
    const message = MESSAGES.inbox[messageId]; // this is a proverbial array { 0: {}, 1: {}}
    return (
      <li key={index}>
        <Message id={message.id} from={message.from}
        title={message.title} />
      </li>
    );
  });
  return(
    <div>
    <div className="inboxTitle">
  
    </div>
    <ul>

    </ul>
    </div>
  );

};

// <ul>
//    {messages}
// </ul>

// export default function Inbox(props) {
//   const messages = props.messages.map(inboxId => (
//       <li key = {message.id} >
//         {message.from}
//         </li>
//   ));
//   return (
//       <ul>
//         {messages}
//         </ul>
//   );
//
// };
