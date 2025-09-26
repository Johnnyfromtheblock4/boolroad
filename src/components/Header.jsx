import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
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
