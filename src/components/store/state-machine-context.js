import React from "react";

const StateMachineContext = React.createContext({
  state: 1,
  url: "",
  changeState: (value) => {},
  changeUrl: (value) => {},
})

export default StateMachineContext
