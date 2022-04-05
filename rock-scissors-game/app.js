

//get user choice
let  userChoice;
//get user choice
let computerChoice;
//get Results
let results;

//Dispaly computer choice
const computerChoiceDisplay = document.getElementById("computer-choice");

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

   //generate cmputer choice
   const generateComputerChoice = ()=>{
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 1){
        computerChoice = "Rock"
    }else if (randomNumber ===2) {
        computerChoice = "Scissors"
    }else{
        computerChoice = "Paper"
    }

    computerChoiceDisplay.innerHTML = computerChoice;

}
generateComputerChoice();
getResults();

}));


const getResults =()=>{

    computerChoice = computerChoice.toUpperCase();
    userChoice = userChoice.toUpperCase();
    if (computerChoice ===userChoice.toUpperCase) {
        results = "Its a Draw"
        
    }else if(computerChoice==='Rock'.toUpperCase() && userChoice === "paper".toUpperCase() ){
        results = "You Win";


    }else if(computerChoice==='Rock'.toUpperCase() && userChoice === "scissors".toUpperCase() ){
        results = "You lost";
        

    }
    else if(computerChoice==='paper'.toUpperCase() && userChoice === "scissors".toUpperCase() ){
        results = "You Win";
        

    }
    else if(computerChoice==='Paper'.toUpperCase() && userChoice === "rock".toUpperCase() ){
        results = "You lost";
        

    }
    else if(computerChoice==='Scissors'.toUpperCase() && userChoice === "Rock".toUpperCase() ){
        results = "You Win";
        

    }
    else if(computerChoice==='Scissors'.toUpperCase() && userChoice === "Paper".toUpperCase() ){
        results = "You lost";
        

    }

    resultsDisplay.innerHTML = results;
}





// generateComputerChoice();