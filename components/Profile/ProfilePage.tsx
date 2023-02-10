import * as React from 'react';
import { IListing } from '../../data/interfaces';
import ListingMenu from '../Profile/components/ListingsMenu';
import ProfileInfo from '../Profile/components/ProfileInfo';
import { ListingsDisplay } from '../shared/listingDisplay';
import Navbar from '../shared/Navbar';

const Profile = () => {
  let listings: IListing[];
  return (
    <div>
      <Navbar />
      <ProfileInfo />
      <ListingMenu />
      <ListingsDisplay listings={listings} listingsAmount={2} />
    </div>
  );
};

export default Profile;
