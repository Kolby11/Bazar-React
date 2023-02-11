import * as React from 'react';
import { Link } from 'react-router-dom';

const ProfileInfo = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="flex-column justify-content-center">
        <img src={'Images/profile_blank.png'} alt="Profile Image"></img>
        <p className="text-center">Username</p>
        <Link to="/profile/settings/">Edit Profile Info</Link>
      </div>
    </div>
  );
};

export default ProfileInfo;
