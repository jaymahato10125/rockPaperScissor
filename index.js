let userScore =0;
let compScore =0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}


const drawGame = () => {
   
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText=userScore;
    } else {
        
        msg.innerText = `You loose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText=compScore;
    }
}


const playGame =(userChoice) => {
    
    const compChoice = genCompChoice();
    

    if(userChoice === compChoice)
        { 
            drawGame();
        } else {
            let userWin = true;
            if(userChoice === "rock"){
                userWin = compChoice === "paper" ? false : true;
            } else if(userChoice==="paper"){
                userWin = compChoice ==="scissors" ? false : true;
            } else {
                userWin = compChoice ==="rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
    

};

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    } );
});