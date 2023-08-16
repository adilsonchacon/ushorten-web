import React from "react";
import CharCount from "./CharCount";
import StatusMessage from "./StatusMessage";

const StatusBar = (props) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <CharCount remainChars={props.remainChars} />
      <StatusMessage statusMessage={props.statusMessage}/>
    </div>
  )
}

export default StatusBar
