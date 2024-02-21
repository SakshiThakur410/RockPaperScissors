let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-Score");
const compScorePara=document.querySelector("#comp-Score");

const gencomputerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    
}

const showWinner=(user) => {
    if(userWin)
    {
        console.log("you win");
        
    }
    else{
        console.log("you loose");
       
    }
}
const playRound = (userChoice, compChoice) => {
    

    if (userChoice === compChoice) {
        console.log("It's a tie!");
        msg.innerText= "It's a tie!";
        
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        console.log("You win!");
        userScore++;
        msg.innerText= "You Win!";
        userScorePara.innerText = userScore;
    } else {
        console.log("You lose!");
        compScore++;
        msg.innerText= "You loose!";
        compScorePara.innerText = compScore;
    }
};

const playgame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = gencomputerchoice();
    console.log("Computer choice =", compChoice);
    playRound(userChoice, compChoice); 
};
choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked:", userChoice);
        playgame(userChoice);
        console.log("User Score:", userScore); 
        console.log("Computer Score:", compScore); 
    });
});
