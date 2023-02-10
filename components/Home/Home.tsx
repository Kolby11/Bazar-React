import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  return (
    <div>
      <p>HomePage</p>
      <Link to="/profile">Profile</Link>
    </div>
  );
};
export default Home;
