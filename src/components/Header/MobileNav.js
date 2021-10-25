import { MobileNavContainer } from "./styles";

export default function MobileNav() {
  return (
    <MobileNavContainer>
      <a href="#">Navegar</a>
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Séries</a></li>
        <li><a href="#">Filmes</a></li>
        <li><a href="#">Bombando</a></li>
        <li><a href="#">Minha Lista</a></li>
      </ul>
    </MobileNavContainer>
  )
}