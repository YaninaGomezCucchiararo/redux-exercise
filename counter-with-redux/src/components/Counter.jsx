import React from 'react'

function Counter({ counter, increment, decrement}) {
    return (
      <div>
        <div>
          Counter: <span> {counter} </span>
        </div>

        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>
    )
}
export default Counter;