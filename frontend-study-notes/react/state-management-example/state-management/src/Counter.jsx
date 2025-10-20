import React from 'react';
import FancyButton from './FancyButton';

export default function Counter({ count, setCount }) {
 return (
  <div>
    <h1>Counter</h1>
    <p>Current Count: {count}</p>
    {count >= 10 && <p>Count has reached 10!</p>}
    <FancyButton onClick={() => setCount(count - 1)} text="Decrement" />
    <FancyButton onClick={() => setCount(count + 1)} text="Increment" />
  </div>
 );
}