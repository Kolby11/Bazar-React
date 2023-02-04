import * as React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <div>
      <div className="nav-bar">
        {/* Pridat presmerovanie na hlavnu stranku*/}
        <a href="index.html">Bazos</a>
        <a href="settings.html">Nastavenia</a>
      </div>
    </div>
  );
};

export default Navbar;
