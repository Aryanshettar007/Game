let userscore=0;
let compscore=0;

const choices=document.querySelectorAll('.choice');

const userScoreBoard=document.querySelector('#user-score');
const compScoreBoard=document.querySelector('#comp-score');



const genCompChoice=()=>{
    const options=['rock','paper','scissors'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const msg=document.querySelector('#msg');


const drawGame=()=>{
    console.log("game was drawn");
    msg.innerText=`Game Draw!`;
    msg.style.backgroundColor="blue";
};

choices.forEach(choice=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
})

const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userScoreBoard.innerText = userscore;
    } else {
        console.log("You Lose!");
        msg.innerText = `You Lose! Your ${userchoice} loses to ${compChoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        compScoreBoard.innerText = compscore;
    }
};

const playGame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compChoice = genCompChoice(); // Generate the computer's choice
    console.log("computer choice =", compChoice);

    if (userchoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userchoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice); // Pass userchoice and compChoice to showWinner
    }
};

