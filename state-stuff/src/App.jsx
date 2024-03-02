import { useState } from 'react'


function App() {


  // [variable, variableSetter] = useState (so setCount is a function)
  const [count, setCount] = useState(0);
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Set Count</button>
    </>
  )
}

export default App
