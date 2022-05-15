import React from 'react'

import { useStyles } from './styles'
import { ButtonProps } from './types'

const Button = ({ children }: ButtonProps) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}

export default Button
