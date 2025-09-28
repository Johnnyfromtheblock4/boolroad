import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-dark border-bottom border-body p-0" data-bs-theme="dark">
        <div className="container-fluid justify-content-start">
          <Link to="/" className="navbar-brand">
          <img className="boolroad-logo" src="/boolroad.png" alt="BoolRoad" />
            <span className="first-part-title">.bool</span><span>Road</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
