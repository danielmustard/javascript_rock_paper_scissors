
//Computer play
function computerPlay (){
    const randomArray = Math.floor(Math.random() * 3)
    const results = ["rock","paper","scissors"];
    return results[randomArray];
}

function playRound(playerSelection, computerSelection){
    //Player winning sections
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return  ("You win, rock beats scissors!")
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return ("You win paper beats rock!")
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return ("You win Scissors beats paper");
    //Player losing Selections
    }else if (computerSelection === "rock" && playerSelection === "scissors"){
        return  ("You lose, computer chose rock")
    }else if (computerSelection === "paper" && playerSelection === "rock"){
        return ("You lose, computer chose paper")
    }else if (computerSelection === "scissors" && playerSelection === "paper"){
        return ("You lose, computer chose scissors")
    //Both choosing same outcome    
    }else if (computerSelection === playerSelection){
        return (`Draw! you both picked ${computerSelection}`)
    }
} 

function game(){
    for (let i = 0; i < 5; i++) {
        console.log(`🟦Round ${i}🟦`)
        let playerSelection = prompt("Enter Rock🤘, Paper🧻 or Scissors ✂")
     }
}

// game();