import './Fog.css'

function Fog() {
  return (
    <div className="fog" aria-hidden="true">
      <div className="fog-layer fog-layer--back" />
      <div className="fog-layer fog-layer--mid" />
      <div className="fog-layer fog-layer--front" />
    </div>
  )
}

export default Fog
