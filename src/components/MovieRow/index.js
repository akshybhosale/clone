import PropTypes from 'prop-types';
import { MovieRowContainer } from './styles';

function MovieRow({ category }) {
  return (
    <MovieRowContainer>
      <header>
        <h3>{category.title}</h3>
      </header>
      <div className="list-slider" />
    </MovieRowContainer>
  );
}

MovieRow.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieRow;
