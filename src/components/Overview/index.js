import PropTypes from 'prop-types';

import {
  OverviewContainer, ToTopOverlay, Info, ToRightOverlay,
} from './styles';

import play from '../../assets/images/play.png';
import info from '../../assets/images/info.png';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

function Overview({ item }) {
  return (
    <OverviewContainer background={`${IMAGE_PATH}${item.backdrop_path}`}>
      <ToTopOverlay>
        <ToRightOverlay>
          <Info>
            <header>
              <h2>{item.name}</h2>
            </header>
            <p>{item.overview}</p>
            <div className="actions">
              <button id="play" type="button">
                <img src={play} alt="Play" />
                Assistir
              </button>
              <button id="info" type="button">
                <img src={info} alt="Info" />
                Mais informações
              </button>
            </div>
          </Info>
        </ToRightOverlay>
      </ToTopOverlay>
    </OverviewContainer>
  );
}

Overview.propTypes = {
  item: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default Overview;
