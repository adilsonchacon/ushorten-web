import React, { useState, useContext, useEffect } from "react";
import Form from './UI/Forms/Form';
import TextareaField from './UI/Forms/TextareaField';
import Button from './UI/Buttons/Button';
import StatusBar from './StatusBar/StatusBar';
import StateMachineContext from "./store/state-machine-context"
import ReactRecaptcha3 from 'react-google-recaptcha3';

const MainForm = (props) => {
  const maxCharAllowed = 2048
  const [statusMessage, setStatusMessage] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [remainChars, setRemainChars] = useState(maxCharAllowed)
  const [urlValue, setUrlValue] = useState("")
  const StateMachineCtx = useContext(StateMachineContext)

  useEffect(() => {
    ReactRecaptcha3.init(process.env.REACT_APP_RECAPTCHA_PUBLIC_KEY).then(status => {
      if (status !== 'success') {
        console.log("Error! Could not load Recaptcha.")
      }
    })
  }, [])

  const shortenButtonClickHandler = () => {
    ReactRecaptcha3.getToken().then(token => {
      StateMachineCtx.changeState(2)
      fetch(process.env.REACT_APP_API_BASE_URL + '/api/urls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'url': {
            'link': urlValue,
            'g-recaptcha-token': token,
          }
        })
      }).then(response => response.json())
        .then(data => {
          if (data.hasOwnProperty('error')) {
            StateMachineCtx.changeUrl("")
            StateMachineCtx.changeState(1)
          } else {
            StateMachineCtx.changeUrl(process.env.REACT_APP_BASE_SHORT_URL+ '/' +data.data.short)
            StateMachineCtx.changeState(3)
          }
        })
    }, error => {
      // handle error here
      console.log("ERROR!", error)
    })
  }

  const onTextareaChangeHandler = (event) => {
    setUrlValue(prevValue => event.target.value)
    setRemainChars(prevValue => maxCharAllowed - event.target.value.length)

    try {
      new URL(event.target.value)
      setStatusMessage(prevValue => (event.target.value.length <= maxCharAllowed ? 'OK' : 'URL must have up to ' + maxCharAllowed + ' chars'))
      setIsValid(event.target.value.length <= maxCharAllowed)
    } catch {
      setStatusMessage(prevValue => (event.target.value.length === 0) ? '' : 'Invalid URL format')
      setIsValid(false)
    }
  }

  return (
    <Form>
      <TextareaField label={'URL to shorten:'} onChange={onTextareaChangeHandler} value={urlValue} rows={5}/>
      <StatusBar remainChars={remainChars} statusMessage={statusMessage} />
      <Button color={'blue'} disabled={!isValid} onClick={shortenButtonClickHandler}>Shorten</Button>
    </Form>
  )
}

export default MainForm

// > curl -X POST http://localhost:4000/api/urls -H 'Content-Type: application/json' -d '{"url": { "link": "http://unity26.com"} }'
// {"data":{"id":1,"short":"v","link":"http://unity26.com","hash":"E7CA065E6BF429FDDC9F397A679E848B"}}%

// google recaptcha 6Lf8VConAAAAAIrb7lG1YkThQkeMXBRDXRhYGYzZ
