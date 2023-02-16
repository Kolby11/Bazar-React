import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

import Profile from './components/Profile/ProfilePage';
import Settings from './components/Settings/Settings';
import './assets/style.css';
import AddListing from './components/Add Listing/AddListing';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/profile/add_listing" element={<AddListing />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
