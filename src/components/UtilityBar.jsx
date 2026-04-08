import { useState, useEffect } from 'react'
import './UtilityBar.css'

const BASE = import.meta.env.BASE_URL

function UtilityBar() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const formatted = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="utility-bar">

      {/* Controls cluster */}
      <div className="utility-group">

        {/* Coin + currency */}
        <div className="utility-item utility-currency">
          <svg className="utility-icon utility-coin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="coin-face" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#016858"/>
                <stop offset="100%" stopColor="#24AEA8"/>
              </linearGradient>
              <linearGradient id="coin-edge" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#01453a"/>
                <stop offset="100%" stopColor="#0e7a76"/>
              </linearGradient>
            </defs>
            <ellipse cx="12" cy="19" rx="8.5" ry="2.5" fill="url(#coin-edge)"/>
            <circle cx="12" cy="11" r="8.5" fill="url(#coin-face)"/>
            <ellipse cx="10" cy="8" rx="3.2" ry="1.5" fill="rgba(255,255,255,0.18)"/>
            <text x="12" y="15" textAnchor="middle" fontSize="10" fill="white" fontFamily="inherit" fontWeight="800">$</text>
          </svg>
          <span className="utility-amount">304</span>
        </div>

        {/* Notification */}
        <button className="utility-btn" aria-label="Notifications">
          <svg className="utility-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V11a6 6 0 0 0-5-5.92V4a1 1 0 0 0-2 0v1.08A6 6 0 0 0 6 11v5l-1.71 1.71A1 1 0 0 0 5 19.41V20h14v-.59a1 1 0 0 0-.29-.7L18 17z"/>
          </svg>
        </button>

        {/* Settings */}
        <button className="utility-btn" aria-label="Settings">
          <svg className="utility-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.49.49 0 0 0-.61.22l-2 3.46a.48.48 0 0 0 .12.64l2.11 1.65a7.2 7.2 0 0 0-.07.98c0 .34.03.66.07.98l-2.11 1.65a.48.48 0 0 0-.12.64l2 3.46c.13.22.4.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.06.24.27.42.49.42h4c.22 0 .43-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.48 0 .61-.22l2-3.46a.48.48 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z"/>
          </svg>
        </button>

      </div>

      {/* Profile */}
      <div className="utility-profile">
        <img src={`${BASE}avatar.jpg`} alt="Profile" className="utility-avatar" />
        <span className="utility-status-dot" />
      </div>

      {/* Clock */}
      <span className="utility-clock">{formatted}</span>

    </div>
  )
}

export default UtilityBar
