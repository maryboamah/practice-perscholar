// click on start reset
// if we are playing
//yes
//reload page
//not playing
//show trials left box
var playing = false;
var score = 0;
var trialLeft;
var step;
var action;
var fruits = [
  "apple",
  "mango",
  "pineapple",
  "peach",
  "cherry",
  "banana",
  "pear",
  "tomato",
  "watermelon",
  "strawberry",
  "orange",
  "peachan",
  "lemon",
  "grapes",
];
$(function () {
  $(".reset").on("click", function () {
      //
    //check if we are playing
    if (playing == true) {
      //if playing reload page
      location.reload();
    } else {
      //if not playing
      playing = true; //game initiated

      //set score to 0
      score = 0;
      $("#myscore").html(score);

      //get life for player and trials left
      $(".life").show();
      trialLeft = 3;
      addHearts();
      $(".reset").html("Reset Game");
      $(".alert").hide();
 
      //get fruits to drop

      dropFruits();
    }
  });

  //slice 
$(".fruits").on("mouseover", function(){
    score++;
    $("#myscore").html(score);//update score
    // document.getElementById("slicesound").play();
    $("#slicesound")[0].play();

    //stop fruits
    
    clearInterval(action);
    $(".fruits").hide("explode", { pieces: 4 }, 200);
   

    setTimeout(dropFruits,800)
   
    //send new fruits
    
})


function addHearts() {
    $(".life").empty();
  for (var i = 0; i < trialLeft; i++) {
    $(".life").append('<img src= "images/hearts.png"  class="heartimage">');
  }
}




//drop fruits
function dropFruits() {
  $(".fruits").show();

  //randomly choose fruit
  chooseFruit();
  $(".fruits").css({
    'left': Math.round(($(".gameboard").width() - 100) * Math.random()),
    'top': -70,
  });

  //generate random step
  step = 1+ Math.round (5*Math.random());

  //movefruit down by one step every 10ms

  action = setInterval(function () {
    $(".fruits").css("top", $(".fruits").position().top + step);

    //check if fruit is too low

    if ($(".fruits").position().top > $(".gameboard").height()) {
      console.log($(".gameboard").width())

        //check if you have trials left
        if(trialLeft >1){
            $(".fruits").show();

            //randomly choose fruit
            chooseFruit();


            $(".fruits").css({
              'left': Math.round(($(".gameboard").width() - 100) * Math.random()),
              'top': -70,
            });
          
            //generate random step
            step = 1+ Math.round (5*Math.random());
            //reduce number of trials by onet
            trialLeft--;

            //populate trials left box with hearts
            addHearts();
          
        }else{
            playing = false;
            //no trials left game over
           
            //change 
            $(".reset").html("Start Game");

            $(".alert").show();

            $(".alert").html("<p>Game Over</p><p>Your Score is " + score + "</p>" )
            $(".life").hide();
            stopFruitDrop();
            

        }
    }
  }, 10);
}

//generate random fruit
function chooseFruit() {
  $(".fruits").attr(
    "src",
    "images/" + fruits[Math.round((fruits.length - 1) * Math.random())] + ".png"
  );
}


//stop dropping fruits
function stopFruitDrop() {
    clearInterval(action);
    $(".fruits").hide();
    
}
});
