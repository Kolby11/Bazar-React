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
  const [sliderValue, setSlider] = React.useState<number>(0);
  return (
    <div>
      <p>Filter</p>
      <input type="text" placeholder="Search.."></input>
      <select name="cars" id="cars">
        {kategorie.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
      <div className="slider">
        <input
          type="range"
          min="0"
          max="500000"
          onChange={(e) => setSlider(Number(e.target.value))}
        ></input>
        <p id="rangeValue">{sliderValue}</p>
      </div>
    </div>
  );
};
export default Filter;
