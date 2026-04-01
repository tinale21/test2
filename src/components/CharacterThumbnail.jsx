import { useState } from 'react'
import './CharacterThumbnail.css'

function CharacterThumbnail({ character, isSelected, hasSelection, onSelect }) {
  const [hovered, setHovered] = useState(false)

  let opacity
  if (!hasSelection || isSelected) {
    opacity = 1
  } else if (hovered) {
    opacity = 0.72
  } else {
    opacity = 0.5
  }

  return (
    <div
      className={`thumbnail ${isSelected ? 'selected' : ''}`}
      style={{ opacity }}
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={character.image}
        alt={character.name}
        className="thumbnail-img"
        draggable={false}
      />
    </div>
  )
}

export default CharacterThumbnail
