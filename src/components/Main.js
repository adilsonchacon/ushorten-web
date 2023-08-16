import React, {useContext} from "react";
import MainForm from './MainForm';
import Loading from './Loading';
import Result from './Result';
import StateMachineContext from "./store/state-machine-context"

const Main = (props) => {
  const stateMachineCtx = useContext(StateMachineContext)

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      {stateMachineCtx.state === 1 && <MainForm/>}
      {stateMachineCtx.state === 2 && <Loading/>}
      {stateMachineCtx.state === 3 && <Result/>}
    </div>
  )
}

export default Main
