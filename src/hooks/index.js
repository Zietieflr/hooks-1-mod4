import React, {useState, useEffect} from 'react'

export function useCounter(initialState) {
  const [count, setCount] = useState(initialState)
  const countStep = (step) => setCount(count + step)

  useEffect(() => {
    let interval = setInterval(() => countStep(1), 1000)

    return () => clearInterval(interval)
  }, [count])

  return [count, setCount, countStep]
}

export function useToggler(initialState) {
  const [toggle, setToggle] = useState(initialState)

  const toggler = () => setToggle(!toggle)

  return [toggle, toggler]
}

export function useFetch(initialState, url) {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => setState(result))
  }, [])

  return [state, setState]
}