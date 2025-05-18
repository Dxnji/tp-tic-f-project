import './style.css'
import { setupCounter } from './counter.js'
import SwotMatrix from './swot.js';
import BCG from './bcg.js';


const body = document.querySelector('body');
const themeButton = document.createElement('button');
themeButton.textContent = 'Toggle Dark Theme';
themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});


const BGCHtml = `<div id="BCG">
          <h1>BCG Matrix Input Form</h1>
          <div>
              <h2>Add Project</h2>
              <form id="projectForm">
                  <label for="projectName">Project Name:</label>
                  <input type="text" id="projectName" name="projectName"><br>
      
                  <label for="marketShare">Market Share (%):</label>
                  <input type="number" id="marketShare" name="marketShare" min="0" max="100"><br>
      
                  <label for="marketGrowth">Market Growth (%):</label>
                  <input type="number" id="marketGrowth" name="marketGrowth" min="-100" max="100"><br>
      
                  <button type="submit">Add Project</button>
              </form>
                <div>
                  <label for="MGconstraints">Market Share Growth (%):</label>
                  <input id="MGC" name="MGconstraints" type="number">
                  <label for="MSconstraints">Market Share constraints (%):</label>
                  <input id="MSC"name="MSconstraints" type="number">
                </div>
              </div>
      
          <div>
              <h2>Projects List</h2>
              <ul id="projectsList">
                  <!-- Projects will be listed here -->
              </ul>
          </div>
      
          <div>
              <h2>BCG Matrix</h2>
              <table id="BCGmatrix" border="1">
                  <tr>
                      <th></th>
                      <th>High Market Growth</th>
                      <th>Low Market Growth</th>
                  </tr>
                  <tr>
                      <th>High Market Share</th>
                      <td>Stars</td>
                      <td>Cash Cows</td>
                  </tr>
                  <tr>
                      <th>Low Market Share</th>
                      <td>Question Marks</td>
                      <td>Dogs</td>
                  </tr>
              </table>
          </div>`
const swotHtml = `<div id="swot" class="swot">  
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
        </div>`

document.querySelector('#app').innerHTML = `
    <div id="main" class="main">
      <div id="sidebar" class="sidebar">
        <button id="swotbtn">SWOT</button> 
      </div>
      <div id="content" class="content">
      ${swotHtml}
      </div>
    </div>
`

function handleDelete(id) {
  const divElement = document.getElementById("div" + id);
  const listElement = document.getElementById(id);

  divElement.remove();
  listElement.remove();

}

function main() {
  const dispayContent = document.getElementById("content");
  const swotcontent = document.getElementById("swot");
  const BCGbtn = document.getElementById("BCGbtn");
  const swotbtn = document.getElementById("swotbtn");

  // swotbtn.addEventListener("click",(event) => {
  //   console.log("hey there ");
  //   dispayContent.innerHTML = swotHtml;
  // });

  // BCGbtn.addEventListener("click",(event) => {
  //   console.log("hello");  
  //   dispayContent.innerHTML = BGCHtml;
  // });

  const formElement = document.getElementById("swotform");
  const tableElement = document.getElementById("swottable");
  const itemsList = document.getElementById("itemList");

  //const projectForm = document.getElementById("projectForm");
  //const projectList = document.getElementById("projectsList");
  //const BCGmatrix = document.getElementById("BCGmatrix");


  //const bcg = new BCG(projectForm,projectList,BCGmatrix)
  const swot = new SwotMatrix(formElement, tableElement, itemsList);
}

document.addEventListener("DOMContentLoaded", main);

document.querySelector('#sidebar').appendChild(themeButton);