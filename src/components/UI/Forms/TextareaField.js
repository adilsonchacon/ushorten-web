import React from "react";
import Field from "./Field";
import Textarea from "./Textarea";
import Label from "./Label";

const InputField = (props) => {
  return (
    <Field>
      <Label
        htmlFor={props.id}
      >
        {props.label}
      </Label>
      <Textarea
        id={props.id}
        name={props.name}
        rows={props.rows}
        autoFocus={props.autoFocus}
        placeholder={props.placeholder}
        onChange={props.onChange}
      >
        {props.children}
      </Textarea>
    </Field>
  )
}

export default InputField
