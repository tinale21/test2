import { useState, useEffect } from 'react'
import './Disclaimer.css'

const messages = [
  {
    label: 'DISCLAIMER:',
    body: 'Hero Faction is a student prototype. All characters are fictional.',
  },
  {
    label: 'GAME FACT:',
    body: 'Each character\'s stats reflect a unique academic archetype.',
  },
  {
    label: 'GAME FACT:',
    body: 'Daniel holds the highest curiosity rating in the faction.',
  },
  {
    label: 'GAME FACT:',
    body: 'Rae\'s knowledge stat surpasses every other faction member.',
  },
  {
    label: 'DISCLAIMER:',
    body: 'Gameplay systems and faction mechanics are subject to change.',
  },
]

function Disclaimer() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % messages.length)
        setVisible(true)
      }, 500)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const { label, body } = messages[index]

  return (
    <div className={`disclaimer ${visible ? 'disclaimer--visible' : 'disclaimer--hidden'}`}>
      <span className="disclaimer-label">{label}</span>
      <span className="disclaimer-body">{body}</span>
    </div>
  )
}

export default Disclaimer
