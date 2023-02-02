import * as React from 'react';
import './style.css';

const maxListingsAmount: number = 7;
const listings = ['Car', 'Tshirt', 'Banana'];
const ListingMenu = () => {
  return (
    <div>
      <div className="listings-selection">
        <button>Moje Inzeraty</button>
        <button>Uložené inzeráty</button>
      </div>
      <div>
        {listings.map((item) => (
          <div className="listing-display">
            <img alt="{item}"></img>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingMenu;
