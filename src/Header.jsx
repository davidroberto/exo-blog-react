import ProfileMenu from "./ProfileMenu";
import "./Header.scss";

function Header() {
  return (
    <header>
      <h1>Le blog sur les plus beaux abris-bus de France</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Articles</li>
          <li>Contact</li>
          <ProfileMenu />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
