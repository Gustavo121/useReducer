import { useState } from 'react';

export function CounterUseState() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Counter com useState</h3>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}