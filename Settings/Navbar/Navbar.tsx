import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <div>
      <div className="nav-bar">
        {/* Pridat presmerovanie na hlavnu stranku*/}
        <Link to="/">Bazos</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Navbar;
