import { useState, useEffect } from 'react'
import './App.css';

const App = () =>  {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setCounter(100)
  }, [])

  return (
    <div className="App">
      <button onClick={() => setCounter((preCount) => preCount - 1)}>-</button>
      <button>{counter}</button>
      <button onClick={() => setCounter((preCount) => preCount + 1)}>+</button>
    </div>
  );
}

export default App;
