import './Background.css'

const BASE = import.meta.env.BASE_URL

const backgrounds = [
  { id: null,     src: `${BASE}bg.png`        },
  { id: 'kevin',  src: `${BASE}bg.png`        },
  { id: 'hanna',  src: `${BASE}bg-hanna.png`  },
  { id: 'rae',    src: `${BASE}bg-rae.png`    },
  { id: 'daniel', src: `${BASE}bg-daniel.png` },
]

function Background({ characterId }) {
  return (
    <div className="bg-stage">
      {backgrounds.map(bg => (
        <div
          key={bg.id ?? 'default'}
          className="bg-layer"
          style={{
            backgroundImage: `url('${bg.src}')`,
            opacity: characterId === bg.id ? 0.72 : 0,
          }}
        />
      ))}
    </div>
  )
}

export default Background
