import * as React from 'react';
import { IListing } from '../../data/interfaces';
import ListingMenu from '../Profile/components/ListingsMenu';
import ProfileInfo from '../Profile/components/ProfileInfo';
import { ListingsDisplay } from '../shared/ListingDisplay';
import Navbar from '../shared/Navbar';

const Profile = () => {
  let listings: IListing[] = [
    {
      id: 1,
      name: 'Auto',
      category_id: 3,
      price: 250,
      locality: 'Bratislava',
      description: 'Ukradnute',
      watch_count: 23,
    },
    {
      id: 2,
      name: 'Hracka',
      category_id: 3,
      price: 250,
      locality: 'Bratislava',
      description: 'Ukradnute',
      watch_count: 23,
    },
  ];
  return (
    <div className="flex">
      <Navbar />
      <ProfileInfo />
      <ListingMenu />
      <ListingsDisplay listings={listings} listingsAmount={2} isOwner={true} />
    </div>
  );
};

export default Profile;
