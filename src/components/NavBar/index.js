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
        <ul className="score-timer-container">
          <li className="score-container">
            <p className="score-heading">Score:</p>
            <p className="score-value">{score}</p>
          </li>
          <li className="timer-seconds-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer-img"
              className="timer-img"
            />
            <p className="timer-value">{seconds} Sec</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
