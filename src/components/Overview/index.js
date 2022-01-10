import PropTypes from 'prop-types';

import { OverviewContainer, Overlay } from './styles';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

function Overview({ item }) {
  return (
    <OverviewContainer background={`${IMAGE_PATH}${item.backdrop_path}`}>
      <Overlay />
    </OverviewContainer>
  );
}

Overview.propTypes = {
  item: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Overview;
