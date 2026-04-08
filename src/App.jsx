import { useState } from 'react'
import './App.css'
import { characters } from './data/characters'
import CharacterThumbnail from './components/CharacterThumbnail'
import HeroDisplay from './components/HeroDisplay'
import StatsPanel from './components/StatsPanel'
import GameScreen from './components/GameScreen'
import Background from './components/Background'
import Fog from './components/Fog'
import UtilityBar from './components/UtilityBar'
import Disclaimer from './components/Disclaimer'

function App() {
  const [selected, setSelected] = useState(null)
  const [gameStarted, setGameStarted] = useState(false)

  if (gameStarted) {
    return (
      <GameScreen
        character={selected}
        onBack={() => setGameStarted(false)}
      />
    )
  }

  const hasSelection = selected !== null

  return (
    <div className="screen">
      <Background characterId={selected?.id ?? null} />
      {selected && <Fog />}
      <UtilityBar />
      <Disclaimer />

      {/* LEFT ZONE */}
      <div className="zone-left">
        <button className="btn-nav" onClick={() => setSelected(null)}>
          ← Back
        </button>

        <div className="zone-left-inner">
          <p className="select-label">Select Character</p>

          <div className="thumbnail-grid">
            {characters.map(char => (
              <CharacterThumbnail
                key={char.id}
                character={char}
                isSelected={selected?.id === char.id}
                hasSelection={hasSelection}
                onSelect={() => setSelected(char)}
              />
            ))}
          </div>

          {hasSelection && (
            <button
              className="btn-ready"
              onClick={() => setGameStarted(true)}
            >
              Ready
            </button>
          )}
        </div>
      </div>

      {/* CENTER ZONE */}
      <div className="zone-center">
        {selected && (
          <HeroDisplay key={selected.id} character={selected} />
        )}
      </div>

      {/* RIGHT ZONE */}
      <div className="zone-right">
        {selected && (
          <StatsPanel key={selected.id} character={selected} />
        )}
      </div>

    </div>
  )
}

export default App
