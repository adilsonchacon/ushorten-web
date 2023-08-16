import React, {useContext}  from "react"
import Button from './UI/Buttons/Button';
import StateMachineContext from "./store/state-machine-context"


const Result = (props) => {
  const StateMachineCtx = useContext(StateMachineContext)

  const copyButtonHandler = () => {
    navigator.clipboard.writeText(document.getElementById('result-shorten-url').textContent);
  }

  return (
    <div className="grid grid-cols-1">
      <div className='text-center text-4xl border bg-gray-200 rounded-xl border-slate-500 p-4' id="result-shorten-url">
        {StateMachineCtx.url}
      </div>
      <div className='text-center p-4'>
        <Button color={'blue'} onClick={copyButtonHandler}>Copy</Button>
      </div>
      <div className='text-center p-4'>
        <a href="/">New</a>
      </div>
    </div>
  )
}

export default Result
