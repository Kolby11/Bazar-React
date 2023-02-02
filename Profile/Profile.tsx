import * as React from 'react';
import Navbar from '../Profile/Navbar/Navbar';
import './style.css';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="profile-info">
        <img src={'Images/profile_blank.png'} alt="Profile Image"></img>
        <p>Username</p>
      </div>
      <div className="listings-selection">
        <button>Moje Inzeraty</button>
        <button>Uložené inzeráty</button>
      </div>
    </div>
  );
};

export default Profile;
