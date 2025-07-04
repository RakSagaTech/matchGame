import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, thumbnail} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onClickThumbnail = () => {
    thumbnail(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} className="thumbnail-img" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
