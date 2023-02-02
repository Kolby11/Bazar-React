import * as React from 'react';
import ListingMenu from '../Profile/ListingsMenu/ListingsMenu';
import Navbar from '../Profile/Navbar/Navbar';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import './style.css';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <ProfileInfo />
      <ListingMenu />
    </div>
  );
};

export default Profile;
