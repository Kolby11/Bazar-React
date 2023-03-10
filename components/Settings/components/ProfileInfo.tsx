import * as React from 'react';

const ProfileSettingsInfo = () => {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <div className="flex-row align-content-center">
          <img src={'Images/profile_blank.png'} alt="Profilová fotka"></img>
          <br />
          <br />
          <button className="btn btn-primary">Zmeniť profilovú fotku</button>
        </div>
        <br />
        <form className="flex-column">
          <label className="form-label">Zmeniť meno</label>
          <br />
          <input className="input-group-text" value="meno" />
          <br />
          <label className="form-label">Zmeniť heslo</label>
          <br />
          <input className="input-group-text" value="heslo" />
          <br />
          <br />
          <button type="button" className="btn btn-primary">Uložiť zmeny</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettingsInfo;
