import { ProfileBoxContainer } from './styles';

import anne from '../../assets/images/anne.png';
import bea from '../../assets/images/bea.png';
import mason from '../../assets/images/mason.png';

export default function ProfileBox() {
  return (
    <ProfileBoxContainer>
      <div className="main-profile">
        <img src={anne} alt="Current Profile" />
        <span />
      </div>
      <div className="complement">
        <div className="callout-arrow" />
      </div>
      <div className="dropdown">
        <ul>
          <li>
            <img src={bea} alt="Other Profile 1" />
            <span>Bea</span>
          </li>
          <li>
            <img src={mason} alt="Other Profile 2" />
            <span>Mason</span>
          </li>
          <li>
            <span>Gerenciar perfis</span>
          </li>
        </ul>
        <div className="kids">
          <a href="#">Infantil</a>
        </div>
        <div className="options">
          <ul>
            <li>
              <a href="#">Conta</a>
            </li>
            <li>
              <a href="#">Centro de ajuda</a>
            </li>
            <li>
              <a href="#">Sair da Netflix</a>
            </li>
          </ul>
        </div>
      </div>
    </ProfileBoxContainer>
  );
}
