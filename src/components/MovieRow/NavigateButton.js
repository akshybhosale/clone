import PropTypes from 'prop-types';

import arrow from '../../assets/images/arrow.png';
import { StyledNavigateButton } from './styles';

function NavigateButton({ onClick, style, inverted }) {
  return (
    <StyledNavigateButton type="button" onClick={onClick} style={{ ...style, display: 'block' }} inverted={inverted}>
      <img
        src={arrow}
        alt="Arrow"
      />
    </StyledNavigateButton>
  );
}

NavigateButton.defaultProps = {
  inverted: false,
};

NavigateButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape.isRequired,
  inverted: PropTypes.bool,
};

export default NavigateButton;
