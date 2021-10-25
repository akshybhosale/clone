import { Container } from './styles';
import logo from '../../assets/images/logo.png';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

function Header() {
  return (
    <Container>
      <div className="navigation">
        <img src={logo} alt="Netflix Logo" />
        <DesktopNav />
        <MobileNav />
      </div>
      <div className="info"></div>
    </Container>
  )
}

export default Header;