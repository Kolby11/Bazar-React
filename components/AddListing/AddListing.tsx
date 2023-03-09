import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



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





const AddListing = () => {
  return (

    <div className="d-flex justify-content-center">
      <div className="align-bottom">
        <div className="flex-row align-content-center">
          <img src={'Images/profile_blank.png'} alt="Profile Image"></img>
          <br />
        
        <form>
        <br/>
        <br/>
          <label>Meno vášho inzeratu: </label>
          <br/>
          <input type="text" id="meno" placeholder="Meno inzeratu" />
          <br/>
          Zadajte cenu inzeratu:
        <br/>
      <input type="text" id="cena" placeholder="Cena" />
          <br/>
          Zadajte Lokalitu
          <br/>
          <input type="text" id="lokalita" placeholder="Lokalita" />
        <br/>
          <label>Kategoria:</label>
          <br/>
          <div>
      <select name="cars" id="cars">
        {kategorie.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
       

        <div id="SelectValue"></div>

    </div>
    
          <br/>
          <br/>
          <br/>
          <br/>
        </form>
      </div>
      <button  type="submit" >Add Listing</button>
    </div>
  </div>

  );
};

export default AddListing;


    