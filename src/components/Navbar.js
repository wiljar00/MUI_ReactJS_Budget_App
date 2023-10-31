import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Budget App</div>
      <ul className="nav-links">
        <li>
          <Link to="/hello">Graphs</Link>
        </li>
        <li>
          <Link to="/budget">Budget</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
