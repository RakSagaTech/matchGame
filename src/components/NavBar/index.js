import './index.css'

const NavBar = props => {
  const {score, totalSeconds} = props
  return (
    <nav className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="score-and-seconds-container">
        <li className="score-container">
          <p className="score"> Score:</p>
          <p className="score-value"> {score} </p>
        </li>
        <li className="timer-and-seconds-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="seconds"> {totalSeconds} Sec </p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
