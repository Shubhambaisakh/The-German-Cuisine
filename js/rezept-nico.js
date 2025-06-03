//Set standard value for protion size
let portionsStart = 4;


//declare recipie variables
let recipeIngredients;
let recipeText;

//Initialize recipie variables according to recipieId

    recipeIngredients = [
        ['100', 'g', 'Spaghetti'],
        ['1', 'pc', 'Clove of garlic'],
        ['0.25', 'bunch', 'Parsley'],
        ['37.5', 'ml', 'Olive oil'],
        ['0.25', 'pinch', 'Salt'],
        ['0.25', 'pc', 'Chili pepper'],
    ];

function renderTable(portions) {

    //Check for correct input field value 
    if (!portions || portions < 1 || portions > 20) {
        //Display error message
        showErrorMessage();
    } else {
        //Hide error message, if visible
        hideErrorMessage();
        // clear current table
        document.getElementById('recipe-table').innerHTML = '';
        //render new table
        for (let i = 0; i < recipeIngredients.length; i++) {
            let ingredient = recipeIngredients[i];

            let amount = +ingredient[0] * portions;
            let unit = ingredient[1];
            let ingredientName = ingredient[2];

            document.getElementById('recipe-table').innerHTML += `
                <tr>
                    <td>${amount}</td>
                     <td>${unit}</td>
                    <td>${ingredientName}</td>
                </tr>`;
        }
    }
};

function showErrorMessage(){
    document.getElementById('input-warning-msg').classList.remove('dont-show');
    document.getElementById('input-amount').classList.add("input-warning");
}

function hideErrorMessage(){
    document.getElementById('input-warning-msg').classList.add("dont-show");
    document.getElementById('input-amount').classList.remove("input-warning");
}

function calcTable() {
    //Get current portions amount from input field and render table anew
    let currentAmount = document.getElementById('input-amount').value;
    renderTable(currentAmount);
}

function setup() {
    //Set displayed value in input field to defined standard value
    document.getElementById('input-amount').value = portionsStart;
    //Render recipie table for the first time
    renderTable(portionsStart);
    //Add event listener to button
    document.getElementById('btn-amount').addEventListener("click", calcTable);

};

//As soon as page is loaded, initialise the setup function
window.addEventListener("load", setup);

