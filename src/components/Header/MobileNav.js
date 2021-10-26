import { MobileNavContainer } from "./styles";

export default function MobileNav() {
  return (
    <MobileNavContainer>
      <a href="#">Navegar</a>
      <div className="complement" />
      <ul>
        <div className="callout-arrow" />
        <li><a className="current" href="#">Início</a></li>
        <li><a href="#">Séries</a></li>
        <li><a href="#">Filmes</a></li>
        <li><a href="#">Bombando</a></li>
        <li><a href="#">Minha Lista</a></li>
      </ul>
    </MobileNavContainer>
  )
}