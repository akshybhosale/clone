import Container from './styles';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <Container>
      <div className='navigation'>
        <img src={logo} alt="Netflix Logo" />
        <nav className='desktop-nav'></nav>
        <nav className='mobile-nav'></nav>
      </div>
      <div className='info'></div>
    </Container>
  )
}

export default Header;