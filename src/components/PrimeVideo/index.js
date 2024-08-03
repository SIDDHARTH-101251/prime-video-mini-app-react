import MoviesSlider from '../MoviesSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="main-movies-container">
        <h1 className="main-heading">Action Movies</h1>
        <div className="slider-container">
          <MoviesSlider movies={actionMovies} />
        </div>
        <h1 className="main-heading">Comedy Movies</h1>
        <div className="slider-container">
          <MoviesSlider movies={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
