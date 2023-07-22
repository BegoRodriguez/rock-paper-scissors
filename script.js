function capitalize(str){
   return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
}


 /* getComputerChoice that will randomly return either 
 ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function 
 in the game to make the computer’s play. Tip: use the console 
 to make sure this is returning 
 the expected output before moving to the next step! */

function getComputerChoice(){
   let computerChoice = ['rock','paper','scissors'];
   const randomIndex = Math.floor(Math.random()*3); // This should be a random number between 0 and 2
   
   return computerChoice[randomIndex]; // We select a random value in the array

}


/*Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters 
- the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: 
"You Lose! Paper beats Rock"
  Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). */

/**************************************************************
 * I have to change this function to return an int to get an score
 */

function playRound(playerSelection, computerSelection) {
     
     let strPlayer = playerSelection.toLowerCase(); // We make case insensitive

     // rock beats scissors, scissors beat paper, paper beats rock (if they are the same it is a draw)
     if (strPlayer === computerSelection) {
         return "It's a Draw! " + capitalize(computerSelection) + " equals " + capitalize(playerSelection);
     }
     switch (strPlayer){
         case 'rock':
            return (computerSelection === 'scissors') ? "You Win! Rock beats Scissors" : "You Lose! Paper beats Rock";
         case 'paper':
            return (computerSelection === 'rock') ? "You Win! Paper beats Rock" : "You Lose! Scissors beat Paper";
         case 'scissors':
               return (computerSelection === 'paper') ? "You Win! Scissors beats Paper" : "You Lose! Rock beat Scissors"
         default:
               return "Please, choose Rock, Paper or Scissors"
       }
   
   }
   
   function game() {

      for (let i=0;i<5;i++){
         const playerSelection = prompt("Choose rock, paper or scissors");
         const computerSelection = getComputerChoice();
         console.log(playRound(playerSelection, computerSelection));
      }
   }

   game();