import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails} = props
  const {thumbnailUrl} = thumbnailDetails

  return (
    <li className="thumbnail-item">
      <button className="thumbnail-btn">
        <img src={thumbnailUrl} className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem
