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
     const message = document.querySelector('#message'); // To update the messages on screen
     

     // rock beats scissors, scissors beat paper, paper beats rock (if they are the same it is a draw)
     if (strPlayer === computerSelection) {
         message.textContent = "It's a Draw! " + capitalize(computerSelection) + " equals " + capitalize(playerSelection);
         return internalCount; // If it is a draw I dont update the count
     }
     switch (strPlayer){
         case 'rock':  // I leave the original code commented
             //return (computerSelection === 'scissors') ? "You Win! Rock beats Scissors" : "You Lose! Paper beats Rock";
            if (computerSelection === 'scissors'){
               message.textContent = "You Win! Rock beats Scissors";
               internalCount[0]++;
               return internalCount;
            }
            message.textContent = "You Lose! Paper beats Rock";
            internalCount[1]++;
            return internalCount;

         case 'paper':
            //return (computerSelection === 'rock') ? "You Win! Paper beats Rock" : "You Lose! Scissors beat Paper";
            if (computerSelection === 'rock'){
               message.textContent = "You Win! Paper beats Rock";
               internalCount[0]++;
               return internalCount;
            }
            message.textContent = "You Lose! Scissors beat Paper";
            internalCount[1]++;
            return internalCount;

         case 'scissors':
            //return (computerSelection === 'paper') ? "You Win! Scissors beats Paper" : "You Lose! Rock beat Scissors"
            if (computerSelection === 'paper'){
               message.textContent = "You Win! Scissors beats Paper";
               internalCount[0]++;
               return internalCount;
            }
            message.textContent = "You Lose! Rock beat Scissors";
            internalCount[1]++;
            return internalCount;

            // Default now it does not exist
       }
   
   }
   
   
   const btn = document.querySelectorAll('button');
   
   let score=[0,0];
   const playerScore = document.querySelector('#playerScore');
   const computerScore = document.querySelector('#computerScore');
   const playerChoice = document.querySelector('#playerChoice');
   const computerChoice = document.querySelector('#computerChoice');

   btn.forEach(button=>button.addEventListener('click', function(e) {
      //game(this.id);
      const computerSelection = getComputerChoice();

      playerChoice.textContent = capitalize(this.id);
      computerChoice.textContent = capitalize(computerSelection);

      score = playRound(this.id, computerSelection, score); // Now the function returns a counter to keep track
      // I still have to display the results on the web
      // Instead of playing game I will probably add the logic and total counter out here
      
      playerScore.textContent = score[0];
      computerScore.textContent = score[1];
    }));

   

 