import * as React from 'react';
import './styles.css';

export default function Main() {
  return (
    <div>
      <h1>Bazoš</h1>
      <button type="button">Click Me!</button>
      <table border="2" cellpadding="5" cellspacing="4">
        <tr>
          <th>Fotka</th>
          <th>Cena</th>
          <th>Lokalita</th>
        </tr>
        <tr>
          <td></td>
          <td>&euro;</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>&euro;</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td> &euro;</td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
