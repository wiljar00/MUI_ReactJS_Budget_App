import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Budget App</Link> 
      <ul className="nav-links">
        <li>
          <Link to="/budget">Budget</Link>
        </li>
        <li>
          <Link to="/graphs">Graphs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
