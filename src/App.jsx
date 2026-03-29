import { useState } from 'react'
import './App.css'

const celebrations = [
  "Let's go!!",
  "Again!!",
  "You can't stop!!",
  "Unstoppable!!",
  "Legendary!!",
  "Are you even human?!",
  "MAXIMUM POWER!!",
  "The button fears you.",
  "Click ascension achieved.",
  "You have transcended.",
]

function App() {
  const [count, setCount] = useState(0)

  const message = count === 0
    ? 'Press the button.'
    : celebrations[Math.min(count - 1, celebrations.length - 1)]

  return (
    <div className="app">
      <p className="celebration">{message}</p>
      <button className="clicker" onClick={() => setCount(c => c + 1)}>
        CLICK ME
      </button>
      {count > 0 && <p className="count">{count} {count === 1 ? 'click' : 'clicks'}</p>}
    </div>
  )
}

export default App
