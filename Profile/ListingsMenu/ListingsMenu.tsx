import * as React from 'react';
import './style.css';

export interface IListing {
  id: number;
  name: string;
  category_id: number;
  price: number;
  locality: string;
  description: string;
  watch_count: number;
}
const maxListingsAmount: number = 2;
const myListingsArray: IListing[] = [
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
];
const savedListingsArray: IListing[] = [
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
function Listings({ listings }: { listings: IListing[] }) {
  return (
    <div>
      {listings.map((item, i) => {
        if (i < maxListingsAmount) {
          return (
            <div className="row">
              <img alt="{item}" />
              <div className="col-6">
                <b>{item.name}</b>
                <p>{item.description}</p>
              </div>
              <b className="col">{item.price}</b>
              <p className="col">{item.locality}</p>
              <p className="col">{item.watch_count}</p>
              <hr />
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
    <div className="container">
      <div>
        <button className="btn btn-primary" onClick={() => setMyListings(true)}>
          Moje Inzeraty
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setMyListings(false)}
        >
          Uložené inzeráty
        </button>
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
