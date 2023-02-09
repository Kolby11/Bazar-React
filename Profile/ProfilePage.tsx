import * as React from 'react';
import ListingMenu, {
  ListingsDisplay,
} from '../Profile/ListingsMenu/ListingsMenu';
import Navbar from '../Profile/Navbar/Navbar';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import './style.css';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <ProfileInfo />
      <ListingMenu />
      <ListingsDisplay
        listings={[
          {
            id: 1,
            name: 'Skoda Oktavia 2015',
            category_id: 1,
            price: 2500,
            locality: 'Sarisske Olany',
            description: 'Fajne avto, vsetko jazdi, trosku piska.',
            watch_count: 24,
          },
          {
            id: 2,
            name: 'Mack a Velka',
            category_id: 2,
            price: 2.5,
            locality: 'Vrakuna',
            description: 'Hryže',
            watch_count: 0,
          },
        ]}
        listingsAmount={2}
      />
    </div>
  );
};

export default Profile;
