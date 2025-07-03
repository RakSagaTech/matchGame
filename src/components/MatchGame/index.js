import {Component} from 'react'
import NavBar from '../NavBar'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'
import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    seconds: 60,
    isGameOver: false,
  }

  renderGameView = () => {
    const {tabsList, imagesList} = this.props
    return (
      <div className="game-view-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png"
          alt="Image"
          className="image"
        />
        <ul className="tabs-list">
          {tabsList.map(eachTab => (
            <TabItem key={eachTab.tabId} tabDetails={eachTab} />
          ))}
        </ul>
        <ul className="thumbnail-list">
          {imagesList.map(eachThumb => (
            <ThumbnailItem key={eachThumb.id} thumbnailDetails={eachThumb} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {score, seconds, isGameOver} = this.state
    return (
      <div className="app-container">
        <NavBar score={score} seconds={seconds} />
        {isGameOver ? 'null' : this.renderGameView()}
      </div>
    )
  }
}

export default MatchGame
