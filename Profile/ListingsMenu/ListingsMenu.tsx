import * as React from 'react';
import './style.css';

const maxListingsAmount: number = 2;
const myListingsArray = ['Car', 'Tshirt', 'Banana', 'Monitor'];
const savedListingsArray = ['Cat', 'Trousers', 'Apple'];
function Listings({ listings }: { listings: string[] }) {
  return (
    <div>
      {listings.map((item, i) => {
        if (i < maxListingsAmount) {
          return (
            <div className="listing-display">
              <img alt="{item}" />
              <p>
                {item + ' '}
                {i}
              </p>
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
