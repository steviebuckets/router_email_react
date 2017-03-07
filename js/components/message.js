import React from 'react';
import {Link} from 'react-router';

export default function Message(props) {
  return(
    <div className="Message">

    From:<br/>

      {props.from}<br/>
      Subject:<br/>
       {props.title}<br/>
    </div>
  );
};
