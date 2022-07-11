function computerPlay(){
const selection = ["Rock","Paper","Scissors"];
const random = Math.floor(Math.random() * selection.length);
const result = (random,selection[random]);
return result;
}

function play(playerSelection,computerSelection){
  if(playerSelection == "Rock" && computerSelection == "Rock"){
    return "DRAW";
  }
  else if(playerSelection == "Paper" && computerSelection == "Paper"){
    return  "DRAW";
  }
  else if(playerSelection == "Scissors" && computerSelection == "Scissors"){
   return "DRAW";
  }
  else if(playerSelection == "Rock" && computerSelection == "Paper"){
    
   return "You Lose Papper Beats Rock";
  }
  else if(playerSelection == "Rock" && computerSelection == "Scissors"){
    return "You Win Rock Beats Scissors";
    
  }
  else if(playerSelection == "Paper" && computerSelection == "Rock"){
    
   return ("You Win Paper Beats Rock");
  }
  else if(playerSelection == "Paper" && computerSelection == "Scissors"){
    
   return ("You Lose Scissors Beats Paper");
  }
  else if(playerSelection == "Scissors" && computerSelection == "Paper"){
    
 return ("You Win Scissors beats Paper");
  }
  else if(playerSelection == "Scissors" && computerSelection == "Rock"){
   
    return  "You Lose Rock Beats Scissors";
  }
}

function game() {
  let myScore = 0;
  let compScore = 0;

  for(let i = 0;i < 5; i++){
    let option = prompt("Select Rock, Paper or Scissors");
   
    let final = (play(option,computerPlay()));
    if(final == "You Win Scissors beats Paper" || final == "You Win Rock Beats Scissors" || final == "You Win Paper Beats Rock"){
      console.log("You win this round");
      myScore++;
      console.log(myScore);
    }
    else if(final == "You Lose Scissors Beats Paper" || final ==  "You Lose Rock Beats Scissors" || final == "You Lose Papper Beats Rock"){
      console.log("You Lose This round");
      compScore++;
      console.log(compScore);
    }
    else{
      console.log("DRAW");
    }
  }
  if(myScore > compScore){
    console.log("You Win");
  }
  else if(myScore < compScore) {
    console.log("Computer Wins")
  }
  else{
    console.log("Draw");
  }
}
