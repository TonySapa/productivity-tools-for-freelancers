import React from 'react'

import { useStyles } from './styles'
import { RandomProps } from './types'

const Random = ({ children }: RandomProps) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}

export default Random
