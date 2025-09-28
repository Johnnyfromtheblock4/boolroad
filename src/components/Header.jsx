import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid justify-content-start">
          <img className="boolroad-logo" src="/boolroad.png" alt="BoolRoad" />
          <Link to="/" className="navbar-brand">
            <span className="first-part-title">.bool</span>Road
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
