import { useEffect, useState } from 'react'
import StatBar from './StatBar'
import './StatsPanel.css'

function StatsPanel({ character }) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="stats-panel">
      <div className="char-identity">
        <h1 className="char-name">{character.name.toUpperCase()}</h1>
        <p className="char-title">{character.title.toUpperCase()}</p>
      </div>
      <div className="stats-list">
        <StatBar label="Speed"     value={character.stats.speed}     animate={animate} delay={0}   />
        <StatBar label="Knowledge" value={character.stats.knowledge} animate={animate} delay={120} />
        <StatBar label="Curiosity" value={character.stats.curiosity} animate={animate} delay={240} />
      </div>
    </div>
  )
}

export default StatsPanel
