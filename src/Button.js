import React from 'react'

const Button = (props) => {
  return (
    <button style={{backgroundColor: props.color}}>{props.text}</button>
  )
}

export default Button;
