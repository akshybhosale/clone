import PropTypes from 'prop-types';

import Container from './styles';

function Overview({ item }) {
  console.log(item);

  return (
    <Container>
      Overview Container
    </Container>
  );
}

Overview.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default Overview;
