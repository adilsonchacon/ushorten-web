import React from "react";

const CharCount = (props) => {
  let message = ''
  let messageClass = 'text-sm'
  const totalChars = Math.abs(props.remainChars)

  if (props.remainChars >= 0) {
    message = 'Available chars: ' + totalChars
    messageClass = messageClass + ' text-green-700'
  } else {
    message = 'You need to remove ' + totalChars + ' char' + (totalChars > 1 ? 's' : '')
    messageClass = messageClass + ' text-red-700'
  }

  return (
    <div className={messageClass}>
      {message}
    </div>
  )
}

export default CharCount

// SELECT ZASSET.ZFILENAME, ZCLOUDMASTER.ZORIGINALFILENAME, ZASSET.ZDATECREATED FROM ZCLOUDMASTER
// INNER JOIN ZASSET ON ZCLOUDMASTER.Z_PK = ZASSET.ZMASTER ORDER BY ZASSET.ZDATECREATED DESC LIMIT 30, 30;
