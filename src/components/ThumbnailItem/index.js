import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, matchImage} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onClickThumbnail = () => {
    matchImage(id)
  }
  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem
