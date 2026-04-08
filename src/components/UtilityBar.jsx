import './UtilityBar.css'

function UtilityBar() {
  return (
    <div className="utility-bar">

      {/* Coin + currency */}
      <div className="utility-item utility-currency">
        <svg className="utility-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5"/>
          <text x="10" y="14.5" textAnchor="middle" fontSize="9" fill="currentColor" fontFamily="inherit" fontWeight="700">C</text>
        </svg>
        <span className="utility-amount">304</span>
      </div>

      {/* Notification */}
      <button className="utility-btn" aria-label="Notifications">
        <svg className="utility-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2.5a5.5 5.5 0 0 0-5.5 5.5v3.5L3 13h14l-1.5-1.5V8A5.5 5.5 0 0 0 10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M8.5 13.5a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </button>

      {/* Settings */}
      <button className="utility-btn" aria-label="Settings">
        <svg className="utility-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

    </div>
  )
}

export default UtilityBar
