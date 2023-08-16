import React from "react";
import LoadingImage from '../images/loading.gif';

const Loading = (props) => {
  return (
    <div className="grid grid-cols-1">
      <div>
        <img src={LoadingImage} alt="Loading..." className='mx-auto' width="100" height="100"/>
      </div>
      <div className='text-center p-8'>
        Loading...
      </div>
    </div>
  )
}

export default Loading
