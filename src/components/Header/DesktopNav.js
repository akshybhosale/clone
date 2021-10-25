import { DesktopNavContainer } from "./styles";

export default function DesktopNav() {
  return (
    <DesktopNavContainer>
      <ul>
        <li className="selected"><a href="#">Início</a></li>
        <li><a href="#">Séries</a></li>
        <li><a href="#">Filmes</a></li>
        <li><a href="#">Bombando</a></li>
        <li><a href="#">Minha Lista</a></li>
      </ul>
    </DesktopNavContainer>
  )
}