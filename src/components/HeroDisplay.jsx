import './HeroDisplay.css'

function HeroDisplay({ character }) {
  return (
    <div className="hero-display">
      <div className="hero-base-wrap">
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
