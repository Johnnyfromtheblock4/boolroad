import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">BoolRoad</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Cerca"
              aria-label="Cerca"
            />
            <button className="btn btn-outline-success" type="submit">
              Cerca
            </button>
          </form>
        </div>
      </nav>{" "}
    </header>
  );
};

export default Header;
