import React from "react";

const Input = (props) => {
  return (
    <label>
      { props.label }
      <input
        className="form-control"
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handler}
        placeholder={props.placeholder}
      />
    </label>
  )
}

export default Input