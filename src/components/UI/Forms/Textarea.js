import React from "react";

const Textarea = (props) => {
  const defaultClass = 'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

  return (
    <textarea
      id={props.id}
      rows={props.rows}
      className={`${defaultClass} ${props.className}`}
      placeholder={props.placeholder}
      onChange={props.onChange}
    >
      {props.children}
    </textarea>
  )
}

export default Textarea
