import * as React from 'react';

let kategorie: string[] = [
  'Zvieratá',
  'Deti',
  'Práca',
  'Auto',
  'Motocykle',
  'Stroje',
  'Záhrada',
  'Mobily',
  'PC',
];

const Filter = () => {
  return (
    <div>
      <p>Filter</p>
      <input type="text" placeholder="Search.."></input>
      <select name="cars" id="cars">
        {kategorie.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
        <input type="range" min="0" max="500000">  
        </input>

        <div id="SelectValue"></div>

      
    </div>
  );
};
export default Filter;
