import React, { useState, useEffect } from 'react';
import { useCounter, useToggler, useFetch } from './hooks'
import Counter from './Counter'
import './App.css';

function App() {


  const [count,,countStep] = useCounter(0)
  const [isToggled, setIsToggled] = useToggler(false)
  const {character, setCharacters} = useFetch([], 'https://rickandmortyapi.com/api/character/')
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => countStep(1)}>+</button>
      <button onClick={() => countStep(-1)}>-</button>
      <button onClick={setIsToggled}>Toggle</button>
      {isToggled ? <Counter /> : null}
    </div>
  );
}

export default App;
