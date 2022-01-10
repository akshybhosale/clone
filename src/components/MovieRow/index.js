import PropTypes from 'prop-types';
import Slider from 'react-slick';

import MovieCard from './MovieCard';
import NavigateButton from './NavigateButton';

import { MovieRowContainer } from './styles';

function MovieRow({ category }) {
  const { title, items } = category;

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    nextArrow: <NavigateButton />,
    prevArrow: <NavigateButton inverted />,
  };

  return (
    <MovieRowContainer>
      <header>
        <h3>{title}</h3>
      </header>
      <Slider {...sliderSettings}>
        {items.map((item) => <MovieCard movie={item} />)}
      </Slider>
    </MovieRowContainer>
  );
}

MovieRow.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape.isRequired,
    ).isRequired,
  }).isRequired,
};

export default MovieRow;
