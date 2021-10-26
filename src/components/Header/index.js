import PropTypes from 'prop-types';

import { Container } from './styles';
import logo from '../../assets/images/logo.png';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import SearchBar from './SearchBar';
import Notifications from './Notifications';
import ProfileBox from './ProfileBox';

function Header({ searchRef }) {
  return (
    <Container>
      <div className="navigation">
        <img className="logo" src={logo} alt="Netflix Logo" />
        <DesktopNav />
        <MobileNav />
      </div>
      <div className="info">
        <SearchBar searchRef={searchRef} />
        <a href="#">Infantil</a>
        <Notifications />
        <ProfileBox />
      </div>
    </Container>
  );
}

Header.propTypes = {
  searchRef: PropTypes.shape({
    current: PropTypes.node,
  }).isRequired,
};

export default Header;
