import React from 'react';

function Input(props) {
  return (
    <div>
      <label>{props.name}</label>
      <input
        name={props.name}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        required={props.required}
        autoComplete={props.autoComplete}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
