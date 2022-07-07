//Computer play
function computerPlay (){
    const randomArray = Math.floor(Math.random() * results.length)
    const results = ["rock","paper","scissors"];
    return results[randomArray];
}

function playRound(playerSelection, computerSelection){
    //Player winning sections
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return  ("player win")
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return ("player win")
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return ("player win");
    //Player losing Selections
    }else if (computerSelection === "rock" && playerSelection === "scissors"){
        return  ("player lose rock")
    }else if (computerSelection === "paper" && playerSelection === "rock"){
        return ("player lose paper")
    }else if (computerSelection === "scissors" && playerSelection === "paper"){
        return ("player lose scissors")
    //Both choosing same outcome    
    }else if (computerSelection === playerSelection){
        return ("draw")
    }
} 
//console.log(playRound(playerSelection, computerPlay()));

//variables for storing player and computer scores
let ps = 0;
let cs = 0;

function game(){
    for (let i = 1; i < 6; i++) {
        console.log(`🟦Round ${i}🟦`)
        let playerSelection = prompt("Enter Rock🤘, Paper🧻 or Scissors ✂")
        let gameResult = playRound(playerSelection, computerPlay());
        if (gameResult == "player win"){
            console.log ("You WON this round!")
            ps++;
        }else if (gameResult == "player lose rock"){
            console.log ("You LOST this round! Computer chose rock!")
            cs++;
        }else if (gameResult == "player lose paper"){
            console.log ("You LOST this round! Computer chose paper!")
            cs++;           
        }else if (gameResult == "player lose paper"){
            console.log ("You LOST this round! Computer chose scissors!")
            cs++;
        }else if (gameResult == "draw"){
            console.log(`Draw! you both picked`);
        }
     }
     console.log(`🧑Player scored ${ps} | 💻 Computer Scored ${cs}`)
}

game();