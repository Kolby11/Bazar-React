import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/">Bazos</Link>
        <Link to="/profile/settings">Nastavenia</Link>
      </div>
    </div>
  );
};

export default Navbar;
