import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const countStep = (step) => setCount(count + step)

  useEffect(() => {
    let interval = setInterval(() => countStep(1), 1000)

    return () => clearInterval(interval)
  }, [count])
  
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => countStep(1)}>+</button>
      <button onClick={() => countStep(-1)}>-</button>
    </div>
  );
}

export default App;
