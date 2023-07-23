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

function playRound(playerSelection, computerSelection, count) {
     
     let internalCount = [... count]; //Player-Computer
     let strPlayer = playerSelection.toLowerCase(); // We make case insensitive

     // rock beats scissors, scissors beat paper, paper beats rock (if they are the same it is a draw)
     if (strPlayer === computerSelection) {
         console.log("It's a Draw! " + capitalize(computerSelection) + " equals " + capitalize(playerSelection));
         return internalCount; // If it is a draw I dont update the count
     }
     switch (strPlayer){
         case 'rock':  // I leave the original code commented
             //return (computerSelection === 'scissors') ? "You Win! Rock beats Scissors" : "You Lose! Paper beats Rock";
            if (computerSelection === 'scissors'){
               console.log("You Win! Rock beats Scissors");
               internalCount[0]++;
               return internalCount;
            }
            console.log("You Lose! Paper beats Rock");
            internalCount[1]++;
            return internalCount;

         case 'paper':
            //return (computerSelection === 'rock') ? "You Win! Paper beats Rock" : "You Lose! Scissors beat Paper";
            if (computerSelection === 'rock'){
               console.log("You Win! Paper beats Rock");
               internalCount[0]++;
               return internalCount;
            }
            console.log("You Lose! Scissors beat Paper");
            internalCount[1]++;
            return internalCount;

         case 'scissors':
            //return (computerSelection === 'paper') ? "You Win! Scissors beats Paper" : "You Lose! Rock beat Scissors"
            if (computerSelection === 'paper'){
               console.log("You Win! Scissors beats Paper");
               internalCount[0]++;
               return internalCount;
            }
            console.log("You Lose! Rock beat Scissors");
            internalCount[1]++;
            return internalCount;

         default:
               //return "Please, choose Rock, Paper or Scissors"
               console.log( "Please, choose Rock, Paper or Scissors");
               return internalCount;
       }
   
   }
   
   function game() {

      let count=[0,0];
      for (let i=0;i<5;i++){
         const playerSelection = prompt("Choose rock, paper or scissors");
         if (playerSelection == null) {
            console.log("I hope you had fun. See you!")
            return;
         }
         const computerSelection = getComputerChoice();
         count = playRound(playerSelection, computerSelection, count); // Now the function returns a counter to keep track
         console.log("Total Score. Player: " + count[0] + " Computer: " + count[1])
      }

      if (count[0]>count[1]) console.log("Congratulations. You won!");
      else if (count[0]<count[1]) console.log("Sorry. You lost");
      else console.log ("It was a draw");

   }

   game();