import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <div>
      <div className="nav-bar">
        <Link to="/">Bazos</Link>
        <Link to="/profile/settings">Nastavenia</Link>
      </div>
    </div>
  );
};

export default Navbar;
