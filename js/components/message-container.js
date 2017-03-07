import React from 'react';


export default function MessageContainer(props) {
  console.log('MessageContainer')
  return(
    <div>
    {props.content}
    </div>
  )
}
