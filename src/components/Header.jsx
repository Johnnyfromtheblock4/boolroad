import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <span className="first-part-title">.bool</span>Road
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
