import PropTypes from 'prop-types';

import { SearchBarContainer } from './styles';
import magnifier from '../../assets/images/magnifier.png';

function SearchBar({ searchRef }) {
  return (
    <SearchBarContainer id="search-bar" ref={searchRef}>
      <img src={magnifier} alt="" />
      <input type="text" placeholder="Títulos, gente e gêneros" />
    </SearchBarContainer>
  );
}

SearchBar.propTypes = {
  searchRef: PropTypes.shape({
    current: PropTypes.node,
  }).isRequired,
};

export default SearchBar;
