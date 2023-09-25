import React from 'react'

  // components
import { useState } from 'react'


export default function Counter() {
  const [count, setCount] = useState(() => {
    return 0
  })

  function decrementCount() {
    if (count >= 1) {
      setCount(prevCount => prevCount - 1)
    }
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <div className='App '>
        <h1 className='counter App-logo'>Count <span>{count}</span></h1>
        <button className='decrement' onClick={decrementCount}>Decrement</button>
        <button className='increment' onClick={incrementCount}>Increment</button>
      </div>
    </>
  )
}
