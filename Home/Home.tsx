import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../Settings/Navbar/Navbar';
import './style.css';

const Settings = () => {
  return (
    <div>
      <p>HomePage</p>
      <Link to="/profile">Profile</Link>
    </div>
  );
};
export default Settings;
