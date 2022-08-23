import Search from "../Search";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-light">
        <a href="/#" className="navbar-brand fw-bold fs-4">
          FinProH8
        </a>

        <Search />
      </nav>
    </div>
  );
};

export default Header;
