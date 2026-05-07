import Logo from "./HeaderLogo";
import HeaderList from "./HeaderList";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Logo />
          <HeaderList />
        </nav>

      </div>
    </header>
  );
};

export default Header;