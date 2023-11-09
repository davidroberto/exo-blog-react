import ProfileMenu from "../../ProfileMenu";
import "./Header.scss";

function Header() {
  return (
    <header className="button_header">
      <h1>Le blog sur les plus beaux abris-bus de France</h1>
      <nav>
        <ul>
          <li className="item_header">Home</li>
          <li>Articles</li>
          <li>Contact</li>
          <ProfileMenu />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
