import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Upgrade from './components/Upgrade'

function App() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)

  return (
    <>
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="samosa.png" alt="" onClick={() => setCount(count+1)}/>
      </div>
      <div className="cards">
      <Upgrade title={"Double Stuffed"} description={"2x per click"} amtNeeded={10}></Upgrade>
      <Upgrade title={"Party Pack"} description={"5x per click"} amtNeeded={100}></Upgrade>
      <Upgrade title={"name"} description={"10x per click"} amtNeeded={1000}></Upgrade>

      </div>
    </>
  )
}

export default App
