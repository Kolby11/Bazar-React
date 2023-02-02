import * as React from 'react';
import './style.css';

export default function Profile() {
  return (
    <div>
      <div className="top-bar">
        {/* Pridat presmerovanie na hlavnu stranku*/}
        <a href="index.html">Bazos</a>
        <a href="settings.html">Nastavenia</a>
      </div>
      <div className="profile-info">
        <img src="" alt="Profile Image"></img>
        <p>Username</p>
      </div>
    </div>
  );
}
