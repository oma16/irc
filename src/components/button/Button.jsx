import React from 'react';
import './button.css'

const Button = ({ className, value, handleClick }) => {
  return (
    <div>
      <button value={value} onClick={handleClick} className={className}>{value}</button>
    </div>
  )
}

export default Button
