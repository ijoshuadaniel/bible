import React from 'react'
import './index.scss'

const Button = ({ title, onClick }) => {
  return (
    <span className='utils-btn' onClick={onClick && onClick}>
      {title}
    </span>
  )
}

export default Button
