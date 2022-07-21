//Computer play
function computerPlay (){
    const results = ["rock","paper","scissors"];
    const randomArray = Math.floor(Math.random() * results.length)
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

function game(e){
    // for (let i = 1; i < 6; i++) {
           
        const resultsDiv = document.getElementById('results');

        if (resultsDiv.innerHTML !== null){
            resultsDiv.innerHTML = "";
        }

        let playerSelection = e.target.id

        let gameResult = playRound(playerSelection, computerPlay());
        
        if (gameResult == "player win"){
            resultsDiv.innerHTML += 'You Won!'            
            ps++;
        }else if (gameResult == "player lose rock"){
            resultsDiv.innerHTML += "You LOST this round! Computer chose rock!";
            cs++;
        }else if (gameResult == "player lose paper"){
            resultsDiv.innerHTML += "You LOST this round! Computer chose paper!";
            cs++;           
        }else if (gameResult == "player lose paper"){
            resultsDiv.innerHTML += "You LOST this round! Computer chose scissors!"
            cs++;
        }else if (gameResult == "draw"){
            resultsDiv.innerHTML += `Draw! you both picked ${playerSelection}`;
        }
        
     //}
     console.log(`🧑Player scored ${ps} | 💻 Computer Scored ${cs}`)
}

function userSelection(e){

    //the ID's within HTML corrispond with the image
    const userClicked = e.target.id;

    console.log(playRound(userClicked, computerPlay()));
}

//game();

//HTML Elements 

//Add event listener to each image, when element is clicked the item clicked is used to trigger the play round function, when round is started the user selection is passed into the round. 

const images = document.querySelectorAll('img');
//for each game image we add a click event listener
images.forEach(image => image.addEventListener('click',game));

