import * as React from 'react';
import './style.css';

export interface Inzerat {
  id: number;
  name: string;
  category_id: number;
  price: number;
  locality: string;
  description: string;
  watch_count: number;
}
const maxListingsAmount: number = 2;
const myListingsArray: Inzerat[] = [
  {
    id: 1,
    name: 'Skoda Oktavia 2015',
    category_id: 1,
    price: 2500,
    locality: 'Sarisske Olany',
    description: 'Fajne avto, vsetko jazdi, trosku piska.',
    watch_count: 24,
  },
];
const savedListingsArray: Inzerat[] = [
  {
    id: 1,
    name: 'Skoda Oktavia 2015',
    category_id: 1,
    price: 2500,
    locality: 'Sarisske Olany',
    description: 'Fajne avto, vsetko jazdi, trosku piska.',
    watch_count: 24,
  },
];
function Listings({ listings }: { listings: Inzerat[] }) {
  return (
    <div>
      {listings.map((item, i) => {
        if (i < maxListingsAmount) {
          return (
            <div className="listing-display">
              <img alt="{item}" />
              <div>
                <b>{item.}</b>
              </div>
            </div>
          );
        }
        return;
      })}
    </div>
  );
}
const ListingMenu = () => {
  const [myListings, setMyListings] = React.useState(true);
  return (
    <div>
      <div className="listings-selection">
        <button onClick={() => setMyListings(true)}>Moje Inzeraty</button>
        <button onClick={() => setMyListings(false)}>Uložené inzeráty</button>
      </div>
      {myListings ? (
        <Listings listings={myListingsArray} />
      ) : (
        <Listings listings={savedListingsArray} />
      )}
    </div>
  );
};

export default ListingMenu;
