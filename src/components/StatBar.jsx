import './StatBar.css'

function StatBar({ label, value, animate, delay }) {
  return (
    <div className="stat-row">
      <p className="stat-label">{label}</p>
      <div className="stat-track">
        <div
          className="stat-fill"
          style={{
            width: animate ? `${value}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default StatBar
