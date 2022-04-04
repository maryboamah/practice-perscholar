//store computer choice
const computerChoice = document.getElementById("computer-choice");
//get user choice
let  userChoice;
//Display user choice
const userChoiceDisplay = document.getElementById("user-choice");

//get results
const resultsDisplay = document.getElementById("results");


//get possible choice
const possibleChoices = document.querySelectorAll(".possibleChoices");




//get the user choice from the button clicked
 possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener ('click', (e)=> {
   userChoice =  e.target.id;
   userChoiceDisplay.innerHTML = userChoice;
}));
