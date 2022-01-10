import PropTypes from 'prop-types';
import { MovieCardContainer } from './styles';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';

function MovieCard({ movie }) {
  const { poster_path: posterPath } = movie;

  return (
    <MovieCardContainer>
      <img src={`${IMAGE_PATH}${posterPath}`} alt="Movie Poster" />
    </MovieCardContainer>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
