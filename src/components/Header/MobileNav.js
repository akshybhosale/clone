import { MobileNavContainer } from './styles';

export default function MobileNav() {
  return (
    <MobileNavContainer>
      <a href="#">Menu Bar</a>
      <div className="complement" />
      <ul>
        <div className="callout-arrow" />
        <li>
          <a className="current" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">Series</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Latest Series</a>
        </li>
        <li>
          <a href="#">My List</a>
        </li>
      </ul>
    </MobileNavContainer>
  );
}
