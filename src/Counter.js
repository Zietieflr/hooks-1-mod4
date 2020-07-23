import React from 'react'
import {useCounter} from './hooks'

export default function Counter() {

  const [count,,countStep] = useCounter(20)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => countStep(1)}>+</button>
      <button onClick={() => countStep(-1)}>-</button>
    </div>
  )
}