import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }

  function decrement() {
    setNumber((prevNumber) => prevNumber - 1);
  }

  return (
    <div>
      <h1>The number: {number}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
