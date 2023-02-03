import * as React from 'react';
import './style.css';

const maxListingsAmount: number = 7;
const myListings: boolean = true;
const listings = ['Car', 'Tshirt', 'Banana'];
const Listings = () => {
  if (!myListings) {
    //Saved Listings
    return (
      <div>
        {listings.map((item) => (
          <div className="listing-display">
            <img alt="{item}"></img>
            <p>{item}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      //My Listings
      <div>
        {listings.map((item) => (
          <div className="listing-display">
            <img alt="{item}"></img>
            <p>{item}</p>
          </div>
        ))}
      </div>
    );
  }
};
const ListingMenu = () => {
  return (
    <div>
      <div className="listings-selection">
        <button>Moje Inzeraty</button>
        <button>Uložené inzeráty</button>
      </div>
      {Listings}
    </div>
  );
};

export default ListingMenu;
