
import React, { useContext } from "react";
import storeContext from "../context/storeContext";
import "./navBar.css";
import { Link } from "react-router-dom";



function NavBar() {
  const cart = useContext(storeContext).cart;
  
  return (
    <div classNameName="mynav">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/#">
            Tactical Karen
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/catalog">
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              
            </ul>
            <form className="d-flex">
              <Link className="nav-link" to="/cart">
              <span className="badge bg-primary">{cart.length} View Cart</span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
