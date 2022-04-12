const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");
const gameUser = document.createElement("div");
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;
const ballDiameter = 20;
const boardHeight = 300;
const blocks = [];
let firstLayer = 10;
let secondLayer = 10;
let thirdLayer = 10;
let xDirection = -2;
let yDirection = 2;
let yLayer = 240;
const userStartPosition = [230, 10];
let userCurrentPosition = userStartPosition;
let timerId;
const ballStartPosition = [270, 40];
let ballCurrentPosition = ballStartPosition;
let score = 0;

//create block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

//create new fifteen blocks

for (let i = 0; i < 15; i++) {
  if (i < 5) {
    blocks.push(new Block(firstLayer, 270));
    firstLayer += 110;
  } else if (i < 10) {
    blocks.push(new Block(secondLayer, yLayer));
    secondLayer += 110;
  } else {
    yLayer = 210;

    blocks.push(new Block(thirdLayer, yLayer));
    thirdLayer += 110;
  }

  // console.log(x)
}
console.log(blocks)
//draw block
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}

addBlocks();

//add user

gameUser.classList.add("user");
drawUser();
grid.appendChild(gameUser);

//draw user
function drawUser() {
  gameUser.style.left = userCurrentPosition[0] + "px";
  gameUser.style.bottom = userCurrentPosition[1] + "px";
}

//move user
function moveUser(e) {
  switch (e.key) {
    //when you use the left arrow
    case "ArrowLeft":
      if (userCurrentPosition[0] > 0) {
        userCurrentPosition[0] -= 10;
        drawUser();
      }
      break;

    //when you use the right arrow
    case "ArrowRight":
      if (userCurrentPosition[0] < 470) {
        userCurrentPosition[0] += 10;
        drawUser();
      }

      break;

    default:
      break;
  }
}
//addevent listener to listen for key events
document.addEventListener("keydown", moveUser);

//add ball
//add ball position

//drawball
function drawBall() {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
}

//create ball element
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

//move ball
function moveBall() {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  drawBall();
  checkForCollisions();
  // console.log(ballCurrentPosition[0], userCurrentPosition[0])
}

timerId = setInterval(moveBall, 30);

//check for colissions
function checkForCollisions() {
    //check for block collisions
    for (let i = 0; i < blocks.length; i++) {
        if ((ballCurrentPosition[0] > blocks[i].bottomLeft[0]  && ballCurrentPosition[0] < blocks[i].bottomRight[0]) && 
        ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1]  && ballCurrentPosition[1] < blocks[i].topLeft[1]) ) {
            //grab all the block from the document
            const allBlocks = Array.from(document.querySelectorAll('.block'))
            allBlocks[i].classList.remove('block')
            blocks.splice(i, 1)
            changeDirection()
            score++
            scoreDisplay.innerHTML = score
            if(blocks.length ===0){
                scoreDisplay.innerHTML ="You Win"
                clearInterval(timerId)
                document.removeEventListener('keydown', moveUser)

            }
            
        }
        
    }
  //check for wall collision
  if (
    ballCurrentPosition[0] >= boardWidth - ballDiameter ||
    ballCurrentPosition[1] >= boardHeight - ballDiameter ||
    ballCurrentPosition[0] <= 0
  ) {
    changeDirection();
  }

//check for user collisions
if((ballCurrentPosition[0]> userCurrentPosition[0] && ballCurrentPosition[0] < userCurrentPosition[0] + blockWidth) &&
(ballCurrentPosition[1] > userCurrentPosition[1] && ballCurrentPosition[1] < userCurrentPosition[1] +blockHeight)){
    changeDirection()

}

  //check for game over
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId);
    scoreDisplay.innerHTML = "You lose";
    document.removeEventListener("keydown", moveUser);
  }
}

//change direction
function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;

    return;
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
   

    return;
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;


    return;
  }

  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
   
    return;
  }
}
