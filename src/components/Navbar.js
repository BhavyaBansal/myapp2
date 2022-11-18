import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="d-dlex">
            <div
              className="bg-primary rounded mx-2 my-2"
              onClick={()=>props.togglemode('primary')}
              // onclick wants function not function call so we have to make it arrow function
              style={{ height: "20px", width: "20px" , cursor:'pointer' }}
            ></div>
          </div>
          <div className="d-dlex">
            <div
              className="bg-danger rounded mx-2 my-2"
              onClick={()=>props.togglemode('danger')}
              // onclick wants function not function call so we have to make it arrow function
              style={{ height: "20px", width: "20px" ,cursor:'pointer' }}
            ></div>
          </div>
          <div className="d-dlex">
            <div
              className="bg-success rounded mx-2 my-2"
              onClick={()=>props.togglemode('success')}
              // onclick wants function not function call so we have to make it arrow function
              style={{ height: "20px", width: "20px" ,cursor:'pointer' }}
            ></div>
          </div>
          <div className="d-dlex">
            <div
              className="bg-warning rounded mx-2 my-2"
              onClick={()=>props.togglemode('warning')}
              // onclick wants function not function call so we have to make it arrow function
              style={{ height: "20px", width: "20px" ,cursor:'pointer' }}
            ></div>
          </div>
          <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              onClick={()=>props.togglemode(null)}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Darkmode
            </label>
          </div>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
// For Telling the type of properties so that no whong type data can be send in future
//isrequired means it cannot be undefined and has some value
Navbar.defaultProps = {
  title: "Set Title here",
  aboutText: "About",
};
