import { useState } from 'react'
import './CharacterThumbnail.css'

function CharacterThumbnail({ character, isSelected, hasSelection, onSelect }) {
  const [hovered, setHovered] = useState(false)
  const dimmed = hasSelection && !isSelected
  const imgOpacity = dimmed ? (hovered ? 0.6 : 0.5) : 1

  return (
    <div
      className={`thumbnail${isSelected ? ' selected' : ''}${dimmed ? ' dimmed' : ''}`}
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={character.image}
        alt={character.name}
        className="thumbnail-img"
        style={{ opacity: imgOpacity }}
        draggable={false}
      />
    </div>
  )
}

export default CharacterThumbnail
