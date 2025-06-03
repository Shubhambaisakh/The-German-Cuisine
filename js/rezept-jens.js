let portionsStart = 4;
let recipeIngredients;
let recipeText;

recipeIngredients = [
  ["0.5", "tbsp", "Olive oil"],
  ["125", "g", "Ground meat, mixed"],
  ["0.25", "", "Onion(s)"],
  ["0.125", "", "Clove(s) of garlic"],
  ["0.5", "tbsp", "Tomato paste"],
  ["0.5", "cans", "Tomato(es)"],
  ["0.125", "L", "Milk"],
  ["5", "g", "Butter"],
  ["10", "g", "Flour"],
  ["75", "g", "Lasagna sheets"],
  ["125", "g", "Grated cheese"],
];

function renderTable(portions) {
  if (!portions || portions < 1 || portions > 20) {
    showErrorMessage();
  } else {
    hideErrorMessage();
    document.getElementById("recipe-table").innerHTML = "";

    for (let i = 0; i < recipeIngredients.length; i++) {
      let ingredient = recipeIngredients[i];
      let amount = +ingredient[0] * portions;
      let unit = ingredient[1];
      let ingredientName = ingredient[2];

      document.getElementById("recipe-table").innerHTML += `
        <tr>
          <td>${amount}</td>
          <td>${unit}</td>
          <td>${ingredientName}</td>
        </tr>`;
    }
  }
}

function showErrorMessage() {
  document.getElementById("input-warning-msg").classList.remove("dont-show");
  document.getElementById("input-amount").classList.add("input-warning");
}

function hideErrorMessage() {
  document.getElementById("input-warning-msg").classList.add("dont-show");
  document.getElementById("input-amount").classList.remove("input-warning");
}

function calcTable() {
  let currentAmount = document.getElementById("input-amount").value;
  renderTable(currentAmount);
}

function setup() {
  document.getElementById("input-amount").value = portionsStart;
  renderTable(portionsStart);
  document.getElementById("btn-amount").addEventListener("click", calcTable);
}

window.addEventListener("load", setup);
