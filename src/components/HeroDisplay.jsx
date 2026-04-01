import './HeroDisplay.css'

function HeroDisplay({ character }) {
  return (
    <div className="hero-display">
      <img
        src={character.image}
        alt={character.name}
        className="hero-img"
        draggable={false}
      />
    </div>
  )
}

export default HeroDisplay
