import React from "react";

const Input = React.forwardRef((props, ref) => {
  const deafultInputClass = 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
  let inputClass = `${deafultInputClass} ` + props.className

  return (
    <input
      ref={ref} 
      id={props.id} 
      name={props.name} 
      type={props.type} 
      autoFocus={props.autoFocus} 
      autoComplete={props.autoComplete} 
      className={inputClass}
      value={props.value}
      placeholder={props.placeholder}
    ></input>
  )
})

export default Input
