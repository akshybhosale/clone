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
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
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
