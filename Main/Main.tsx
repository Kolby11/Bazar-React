import * as React from 'react';
import './styles.css';

export default function Main() {
  return (
    <div>
      <h1>Bazoš</h1>
      <div className="topnav">
      <label for="cars">Vyber značku auta:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
        <input type="text" placeholder="Search.."></input>
      </div>
      <table border="2" width="150%" cellpadding="10" cellspacing="5">
        <tr>
          <th>Fotka</th>
          <th>Cena</th>
          <th>Lokalita</th>
          <th>Popis</th>
        </tr>
        <tr>
          <td></td>
          <td>&euro;</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>&euro;</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td> &euro;</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
