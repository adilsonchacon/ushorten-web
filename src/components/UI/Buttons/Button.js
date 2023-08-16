import React from 'react';

const Button = (props) => {
  const buttonDefaultClass = 'justify-center focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2'
  const buttonSizeClass = props.wide ? 'w-full' : 'inline-flex'
  const buttonDisabled = props.disabled ? 'cursor-not-allowed' : ''
  let buttonColorClass = ''

  switch (props.color.toUpperCase()) {
    case 'BLUE':
      buttonColorClass = 'text-white bg-blue-700'
      buttonColorClass = buttonColorClass + (props.disabled ? '' : ' hover:bg-blue-800 focus:ring-blue-300')
    break
    case 'PURPLE':
      buttonColorClass = 'text-white bg-purple-700'
      buttonColorClass = buttonColorClass + (props.disabled ? '' : ' hover:bg-purple-800 focus:ring-purple-300')
    break
    case 'GREEN':
      buttonColorClass = 'text-white bg-green-500'
      buttonColorClass = buttonColorClass + (props.disabled ? '' : ' hover:bg-green-600 focus:ring-green-400')
    break
    case 'RED':
      buttonColorClass = 'text-white bg-red-700'
      buttonColorClass = buttonColorClass + (props.disabled ? '' : ' hover:bg-red-800 focus:ring-red-300')
    break
    case 'YELLOW':
      buttonColorClass = 'text-white bg-yellow-300'
      buttonColorClass = buttonColorClass + (props.disabled ? '' : ' hover:bg-yellow-400 focus:ring-yellow-300')
    break              
    case 'ORANGE':
      buttonColorClass = 'text-white bg-orange-500'
      buttonColorClass = buttonColorClass + (props.disabled ? '' : ' hover:bg-orange-600 focus:ring-orange-300')
    break
    case 'BLACK':
      buttonColorClass = 'text-white bg-black'
      buttonColorClass = buttonColorClass + (props.disabled ? '' : ' hover:bg-gray-800 focus:ring-gray-700')
    break
    default: // 'WHITE'
      buttonColorClass = 'text-black bg-white border-2 border-black'
      buttonColorClass = buttonColorClass + (props.disabled ? '' : ' hover:bg-gray-100 focus:ring-gray-100 hover:border-gray-900')
  }

  return(
    <button 
      type={props.type || 'button'}
      className={`${buttonSizeClass} ${buttonDefaultClass} ${buttonColorClass} ${buttonDisabled} ` + props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
