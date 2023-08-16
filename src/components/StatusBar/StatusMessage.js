import React from "react";

const StatusMessage = (props) => {
  let message
  let messageClass = 'text-sm text-right'

  if (props.statusMessage === '') {
    message = ''
    messageClass = ''
  } else if (props.statusMessage === 'OK') {
    message = 'Good to go!'
    messageClass = messageClass + ' text-green-700'
  } else {
    message = 'Error: ' + props.statusMessage
    messageClass = messageClass + ' text-red-700'
  }

  return (
    <div className={messageClass}>
      {message}
    </div>
  )
}

export default StatusMessage
