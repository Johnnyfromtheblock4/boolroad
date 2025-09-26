import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            BoolRoad
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
