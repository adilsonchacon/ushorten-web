import React, { useState } from 'react'

import StateMachineContext from './state-machine-context'

const StateMachineProvider = props => {
  const [stateMachine, setStateMachine] = useState(1)
  const [shortUrl, setShortUrl] = useState("")

  const changeStateMachine = value => {
    setStateMachine(value)
  }

  const changeShortUrl = value => {
    setShortUrl(value)
  }

  const stateMachineContext = {
    state: stateMachine,
    url: shortUrl,
    changeState: changeStateMachine,
    changeUrl: changeShortUrl
  }

  return <StateMachineContext.Provider value={stateMachineContext}>
    {props.children}
  </StateMachineContext.Provider>
}

export default StateMachineProvider
