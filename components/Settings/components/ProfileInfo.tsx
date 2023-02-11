import * as React from 'react';

const ProfileSettingsInfo = () => {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <div className="flex-row align-content-center">
          <img src={'Images/profile_blank.png'} alt="Profile Image"></img>
          <br />
          <button>Zmeniť profilovú fotku</button>
        </div>
        <form className="flex-column">
          <label>Change Username</label>
          <br />
          <input value="username" />
          <br />
          <label>Change Password</label>
          <br />
          <input value="password" />
          <br />
        </form>
      </div>
    </div>
  );
};

export default ProfileSettingsInfo;
