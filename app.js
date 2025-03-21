let userScore=0;
let compScore=0;

const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const CompScorePara=document.querySelector("#comp-score");

const gencompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText = "Game was Draw play again !";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        CompScorePara.innerText=compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    const compChoice = gencompChoice();
    if(userChoice ===  compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin = compChoice === 'paper'? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
 