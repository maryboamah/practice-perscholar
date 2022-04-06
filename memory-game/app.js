const cardArray=[
    {
        picName: 'fries',
        img: 'images/fries.png'
    },
    {
        picName: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        picName: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        picName: 'pizza',
        img: 'images/pizza.png'
    },
    {
        picName: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        picName: 'tomato',
        img: 'images/tomato.png'
    },
    {
        picName: 'fries',
        img: 'images/fries.png'
    },
    {
        picName: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        picName: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        picName: 'pizza',
        img: 'images/pizza.png'
    },
    {
        picName: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        picName: 'tomato',
        img: 'images/tomato.png'
    }


]

//empty array for cards that will be chosen

let cardChosen =[];
let cardChosenIds =[];

let won =[]

//randomly sort the array
cardArray.sort(()=> 0.5 - Math.random());

//get grid
const displayGrid = document.querySelector("#grid");



function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        //create element
        const card = document.createElement('img');
        card.setAttribute('src', 'images/rainbow.png')
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)

        //put it in the grid
        displayGrid.appendChild(card);
        
    }
}


createBoard();

//check for match between clicked cards
function checkMatch() {

    const cards =document.querySelectorAll("#grid img")
const optionOneId = cardChosenIds[0];
const optionTwoId = cardChosenIds[1];


//if cards have the same id
if (optionOneId == optionTwoId) {
    alert("Yo clicked the same image")
}

    if(cardChosen[0] == cardChosen[1]){
        
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        won.push(cardChosen)

    }else{
        cards[optionOneId].setAttribute('src', 'images/rainbow.png')
        cards[optionTwoId].setAttribute('src', 'images/rainbow.png')
        
    }
    cardChosen =[];
    cardChosenIds=[];
    if (won.length ==(cardArray.length/2)) {
        $(function () {
            $(".win").show();
        })
        
    }
    
    
}


function flipCard() {
    //get id of clicked element
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].picName);
    cardChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length ===2) {
        setTimeout(checkMatch(),500 )
        
    }
  
}
