import './style.css'
import { setupCounter } from './counter.js'
import SwotMatrix from './swot.js';

document.querySelector('#app').innerHTML = `
    <div id="main" class="main">
      <div id="sidebar" class="sidebar">
        <button>SWOT</button>
        <button>BCG</button>
      </div>
      <div id="content" class="content">
        <div id="swot" class="swot">
          <div class="heading">
            <h3>SWOT Matrix</h3>
          </div>
          <div id="matrix" class="swotmatrix">
            <table id="swottable">
              <tr>
                <th>Strengths</th>
                <th>Weaknesses</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Opportunities</th>
                <th>Threats</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          <form action="" id="swotform">
            <textarea name="text" id="textinput" required></textarea>
            <div class="forminput">
                <label for="field">Fields:</label>
                <select name="field" id="field" required>
                  <option value="" selected disabled>Pick Field</option>
                  <option value="S">Strength</option>
                  <option value="W">Weaknesse</option>
                  <option value="O">Opportunitie</option>
                  <option value="T">Threat</option>
                </select>
                <button type="submit">insert</button>
            </div>
            <div class="itemList" id="itemList">
            </div>
          </form>
          <div class="export"> 
            <button id="export">export</button>
          </div>
        </div>
      </div>
    </div>
`

function handleDelete(id) {
  const divElement = document.getElementById("div"+id);
  const listElement = document.getElementById(id);
    
  divElement.remove();
  listElement.remove();

}

function main() {
  const formElement = document.getElementById("swotform");
  const tableElement = document.getElementById("swottable");
  const itemsList  = document.getElementById("itemList");
  
  
  const sowt = new SwotMatrix(formElement,tableElement, itemsList);
}

document.addEventListener("DOMContentLoaded",main());

