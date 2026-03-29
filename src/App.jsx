import { useState } from 'react'
import './App.css'

const stages = [
  {
    title: "CLOSE THE LAPTOP.",
    sub: "It will still be here when you get back.",
    flavor: "The code is not going anywhere. The sun, however, is a limited time offer.",
  },
  {
    title: "YOU'RE STILL HERE.",
    sub: "We see you.",
    flavor: "The outside has been calling. It's starting to feel awkward for everyone.",
  },
  {
    title: "THERE ARE PEOPLE OUT THERE.",
    sub: "Real ones. With faces.",
    flavor: "They do things like laugh and share food. You used to do those things.",
  },
  {
    title: "THIS IS A QUEST.",
    sub: "Objective: touch grass.",
    flavor: "Completion reward: a sense of being a full human person who exists in the world.",
  },
  {
    title: "FINAL WARNING.",
    sub: "After this it gets weird.",
    flavor: "The birds have been briefed. They are waiting.",
  },
  {
    title: "okay fine. stay.",
    sub: "but we're disappointed.",
    flavor: "...no actually please go. this is getting embarrassing for both of us.",
  },
]

function App() {
  const [step, setStep] = useState(0)
  const [accepted, setAccepted] = useState(false)

  const { title, sub, flavor } = stages[Math.min(step, stages.length - 1)]
  const atMax = step >= stages.length - 1

  if (accepted) {
    return (
      <div className="app">
        <div className="bg-grid" />
        <Particles />
        <div className="content accepted-content">
          <span className="accepted-icon">🌿</span>
          <h1 className="accepted-title">Quest Accepted.</h1>
          <p className="accepted-sub">Go. Be a human. We'll be here.</p>
          <p className="accepted-small">Close the laptop first though.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="bg-grid" />
      <Particles />
      <div className="content" key={step}>
        <div className="badge">
          <span className="badge-dot" />
          URGENT TRANSMISSION
        </div>
        <h1 className="title">{title}</h1>
        <p className="sub">{sub}</p>
        <p className="flavor">{flavor}</p>
        <div className="actions">
          <button className="btn-primary" onClick={() => setAccepted(true)}>
            I ACCEPT THIS QUEST
          </button>
          <button
            className="btn-secondary"
            onClick={() => setStep(s => s + 1)}
            disabled={atMax}
          >
            {atMax ? 'seriously though.' : 'not yet →'}
          </button>
        </div>
        {step > 0 && (
          <p className="shame">
            You have ignored this {step} time{step !== 1 ? 's' : ''}.
          </p>
        )}
      </div>
    </div>
  )
}

function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => (
        <div className="particle" key={i} style={{ '--i': i }} />
      ))}
    </div>
  )
}

export default App
