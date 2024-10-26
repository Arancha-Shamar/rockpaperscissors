/* let rounds = 5; */
let playerWins = 0;
let computerWins = 0;

const totalScore = document.getElementById("points")
const PlayBtn = document.getElementById("play")
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")

 /* for (let i = 0; i < rounds; i++) {
    let humanChoice = ""
    let choiceArray = ['paper', 'rock', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choiceArray[randomNum]; */

    function computerChoice() {
        const i = Math.floor(Math.random() * 3)
        if (i === 0) {
            return "rock";
        } else if (i === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    rockBtn.addEventListener('click', () => playRound('rock', computerChoice()));
    paperBtn.addEventListener('click', () => playRound('paper', computerChoice()));
    scissorsBtn.addEventListener('click', () => playRound('scissors', computerChoice()));

    function playRound(humanChoice = 0, computerChoice = 0) {
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log("You win!");
            playerWins++;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log("You win!");
            playerWins++;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log("You lose!");
            computerWins++;
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log("You lose!");
            computerWins++;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log("You lose!");
            computerWins++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log("You win!");
            playerWins++;
        } else {
            console.log("Wrong input, try again");
        }
        pointsUpdate()
    }

    PlayBtn.addEventListener('click', () => {
        PlayBtn.style.display = 'none';
        rockBtn.style.display = 'block';
        paperBtn.style.display = 'block';
        scissorsBtn.style.display = 'block';
    })

    function pointsUpdate() {
        totalScore.textContent = `Score: Human ${playerWins} - Computer ${computerWins}`;
    }
    pointsUpdate()
    