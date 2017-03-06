import React from 'react';
import {Link} from 'react-router';

export default function App(props) {
  return(
    <div>
    <h1>
  <Link to={'/Read/'}>
  Inbox
  </Link>
    </h1>
    <h1>
  <Link to={'/spam/'}>
  Spam
  </Link>
    </h1>
    <div>
      {props.children}
        </div>
    </div>
  )
}
