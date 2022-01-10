import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

import { MovieRowContainer } from './styles';

function MovieRow({ category }) {
  const { title, items } = category;

  return (
    <MovieRowContainer>
      <header>
        <h3>{title}</h3>
      </header>
      <div className="list-slider">
        {items.map((item) => <MovieCard movie={item} />)}
      </div>
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
