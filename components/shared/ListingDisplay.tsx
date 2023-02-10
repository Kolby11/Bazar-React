import * as React from 'react';
import { IListing } from '../../data/interfaces';

interface ListingsProps {
  listings: IListing[];
  listingsAmount: number;
}

export const ListingsDisplay: React.FunctionComponent<ListingsProps> = (
  props
) => {
  const { listings, listingsAmount } = props;
  return (
    <div>
      <div className="row">
        <b className="col">Obrazok</b>
        <b className="col-6">Informácie</b>
        <b className="col">Cena</b>
        <p className="col">Lokalita</p>
        <p className="col">Pozretia</p>
        <hr />
      </div>
      {listings.map((item, i) => {
        if (i < listingsAmount) {
          return (
            <div className="row">
              <img alt="Obrazok" className="col" />
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
};
