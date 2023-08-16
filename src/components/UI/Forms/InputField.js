import React from "react";
import Input from "./Input";
import Label from "./Label";

const InputField = React.forwardRef((props, ref) => {
  return (
    <div className={"field"}>
      <Label
        htmlFor={props.id}
      >
        {props.children}
      </Label>
      <Input
        ref={ref}
        id={props.id}
        name={props.name}
        type={props.type}
        autoFocus={props.autoFocus}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
      />
    </div>
  )
})

export default InputField
