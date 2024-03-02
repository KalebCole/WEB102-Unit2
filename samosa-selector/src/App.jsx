import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Upgrade from './components/Upgrade'

function App() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)

  return (
    <>
      <div className="header-container">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="samosa.png" alt="" onClick={() => setCount(count+multiplier)}/>
      </div>
      <div className="upgrade-container">
      <Upgrade title={"Double Stuffed"} increase={2} multiplier={multiplier} count={count} setCount={setCount} setMultiplier={setMultiplier} amtNeeded={10}></Upgrade>
      <Upgrade title={"Party Pack"} increase={5} multiplier={multiplier} count={count} setCount={setCount} setMultiplier={setMultiplier} amtNeeded={100}></Upgrade>
      <Upgrade title={"name"} increase={10} multiplier={multiplier} count={count} setCount={setCount} setMultiplier={setMultiplier} amtNeeded={1000}></Upgrade>

      </div>
    </>
  )
}

export default App
