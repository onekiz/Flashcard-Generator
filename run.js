var inquirer = require("inquirer");
var FlashCard = require("./cloze.json");
var Card = require("./BasicCard.js")
var basic = require("./basic.json");



basic.forEach(function(element){
   var president = new Card.Basic(element.front, element.back);
   console.log(president.front);
   console.log(president.back);
   console.log("-------------------------------");
});










var numQuestion = 0;
var numCorrect = 0;
var numWrong = 0;

function flashCard(){

      var game = new Card.Cloze(FlashCard[numQuestion].fullText, FlashCard[numQuestion].answer);

      inquirer.prompt([{
        type: "input",
        name: "answer",
        message: game.partial
      }]).then( function(user){

          if (user.answer.toLowerCase() === game.cloze.toLowerCase()){
              console.log("Correct!!!");
              console.log(game.cloze);
              numCorrect++;
          }
          else {
              console.log("Wrong Answer");
              console.log(game.cloze);
              numWrong++;
          }

          if (numQuestion<FlashCard.length-1){
              numQuestion++;
              flashCard();
          }
          else{
            console.log("Game Over");
            console.log("Correct Answers:" + numCorrect);
            console.log("Wrong Answers: " + numWrong);
            inquirer.prompt([{
              type: "confirm",
              name: "answer",
              message: "Do you want to play again?"
            }]).then( function(user){
                if (user.answer){
                  numQuestion = 0;
                  numCorrect = 0;
                  numWrong = 0;
                  flashCard();
                }
                else {
                  console.log("BYEEE");
                }
              });
            }
          });
}


flashCard();
