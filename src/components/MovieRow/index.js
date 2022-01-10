import PropTypes from 'prop-types';

import { MovieRowContainer } from './styles';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';

function MovieRow({ category }) {
  const { title, items } = category;

  return (
    <MovieRowContainer>
      <header>
        <h3>{title}</h3>
      </header>
      <div className="list-slider" />
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
