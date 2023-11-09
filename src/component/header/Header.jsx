import { Link } from "react-router-dom";
import ProfileMenu from "../../ProfileMenu";
import "./Header.scss";

function Header() {
  return (
    <header className="button_header">
      <h1>Le blog sur les plus beaux abris-bus de France</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <ProfileMenu />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
