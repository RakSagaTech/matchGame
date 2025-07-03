import './index.css'

const NavBar = props => {
  const {score, seconds} = props
  return (
    <nav className="navbar-container">
      <div className="logo-score-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="score-timer-container">
          <div className="score-container">
            <p className="score-heading"> Score: </p>
            <p className="score-value">{score}</p>
          </div>
          <div className="timer-seconds-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer-img"
              className="timer-img"
            />
            <p className="timer-value">{seconds} Sec</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
