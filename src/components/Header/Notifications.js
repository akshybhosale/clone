import { NotificationsContainer } from './styles';
import bell from '../../assets/images/bell.png';

export default function Notifications() {
  return (
    <NotificationsContainer>
      <img src={bell} alt="Notifications Bell" />
      <div className="notifications-exhibition" />
    </NotificationsContainer>
  );
}
