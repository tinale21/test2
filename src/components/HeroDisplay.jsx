import './HeroDisplay.css'

function HeroDisplay({ character }) {
  return (
    <div className="hero-display">
      <div className="hero-base-wrap">
        <div className="hero-spotlight" />
        <div className="hero-spotlight-floor" />
        <img
          src={character.image}
          alt={character.name}
          className="hero-img"
          draggable={false}
        />
      </div>
    </div>
  )
}

export default HeroDisplay
