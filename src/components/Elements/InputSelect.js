import React from "react";

const InputSelect = (props) => {
  return (
    <label>
      { props.label }
      <select
        className={props.className}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      >
        <option key=''/>
        {
          props.options.map(item => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))
        }
      </select>
    </label>
  )
}

export default InputSelect