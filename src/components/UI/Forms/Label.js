import React from "react"

const Label = (props) => {
  const defaultClass = 'block mb-2 text-sm font-medium text-gray-900'

  return (
    <label htmlFor={props.id} className={defaultClass}>{props.children}</label>
  )
}

export default Label
