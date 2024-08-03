// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie
  console.log(movie)
  return (
    <Popup
      modal
      trigger={
        <div>
          <img src={thumbnailUrl} alt="thumbnail" />
        </div>
      }
      className="popup-content"
    >
      {close => (
        <>
          <button
            type="button"
            className="trigger-button close-button"
            onClick={() => close()}
            aria-label="close"
            data-testid="closeButton"
          >
            <IoMdClose className="close-icon" />
          </button>
          <div className="video-modal-container">
            <ReactPlayer url={videoUrl} width="100%" />
          </div>
        </>
      )}
    </Popup>
  )
}

export default MovieItem
