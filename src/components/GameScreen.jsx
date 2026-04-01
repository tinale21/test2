import './GameScreen.css'

function GameScreen({ character, onBack }) {
  return (
    <div className="game-screen">
      <button className="btn-nav" onClick={onBack}>← Back</button>
      <div className="game-content">
        <img
          src={character.image}
          alt={character.name}
          className="game-hero"
          draggable={false}
        />
        <div className="game-text">
          <p className="game-eyebrow">Playing as</p>
          <h1 className="game-name">{character.name.toUpperCase()}</h1>
          <p className="game-title">{character.title.toUpperCase()}</p>
          <p className="game-message">Adventure begins.</p>
        </div>
      </div>
    </div>
  )
}

export default GameScreen
