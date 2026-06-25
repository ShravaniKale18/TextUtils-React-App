import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow-sm`}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          {props.title}
        </a>

        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.homeText}
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.aboutText}
            </a>
          </li>
        </ul>

        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            onChange={props.toggleMode}
            checked={props.mode === 'dark'}
          />
          <label className="form-check-label ms-2" htmlFor="switchCheckDefault">
            {props.mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string,
  aboutText: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func
}

Navbar.defaultProps = {
  title: "Set Title Here",
  homeText: "Home",
  aboutText: "About"
}