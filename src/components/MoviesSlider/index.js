import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {movies.map(eachItem =>
        eachItem.categoryId === 'ACTION' ? (
          <MovieItem key={eachItem.id} movie={eachItem} />
        ) : (
          <MovieItem key={eachItem.id} movie={eachItem} />
        ),
      )}
    </Slider>
  )
}

export default MoviesSlider
