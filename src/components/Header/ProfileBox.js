import { ProfileBoxContainer } from './styles';

import anne from '../../assets/images/anne.png';
import bea from '../../assets/images/bea.png';
import mason from '../../assets/images/mason.png';

export default function ProfileBox() {
  return (
    <ProfileBoxContainer>
      <div className="main-profile">
        <img src={anne} alt="Current Profile Picture" />
        <span></span>
      </div>
      <div className="complement" />
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
        </ul>
        <a href="#"></a>
        <div className="options"></div>
      </div>
    </ProfileBoxContainer>
  );
}
