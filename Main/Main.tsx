import * as React from 'react';
import './styles.css';

export default function Main() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <h1>Bazoš</h1>
      <p>Icon buttons:</p>
      <button class="btn">
        <i class="fa fa-home"></i>
      </button>
      <button class="btn">
        <i class="fa fa-bars"></i>
      </button>
      <button class="btn">
        <i class="fa fa-trash"></i>
      </button>
      <button class="btn">
        <i class="fa fa-close"></i>
      </button>
      <button class="btn">
        <i class="fa fa-folder"></i>
      </button>
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
