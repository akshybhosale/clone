import Container from './styles';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <Container>
      <div className="navigation">
        <img src={logo} alt="Netflix Logo" />
        <nav className="desktop-nav">
          <ul>
            <li className="selected"><a href="#">Início</a></li>
            <li><a href="#">Séries</a></li>
            <li><a href="#">Filmes</a></li>
            <li><a href="#">Bombando</a></li>
            <li><a href="#">Minha Lista</a></li>
          </ul>
        </nav>
        <nav className="mobile-nav"></nav>
      </div>
      <div className="info"></div>
    </Container>
  )
}

export default Header;