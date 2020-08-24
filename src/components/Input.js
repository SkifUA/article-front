import React from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      <label>
        { props.label }
        <input
          className="form-control"
          type="text" name="name"
          value={props.value}
          onChange={props.handler}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  )
}

export default Input