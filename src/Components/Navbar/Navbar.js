import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        {props.title}
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/blog">{props.blog_title}</NavLink>
        </li>
        <li>
          <NavLink to="/project">{props.project_title}</NavLink>
        </li>
        <li>
          <NavLink to="/About">{props.about_title}</NavLink>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  blog_title: PropTypes.string.isRequired,
  project_title: PropTypes.string.isRequired,
  about_title: PropTypes.string.isRequired,
};
