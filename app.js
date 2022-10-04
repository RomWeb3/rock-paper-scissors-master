// Rules Popup : open & close

const rules = document.querySelector('.rules');
const popup = document.querySelector('.popup');
const closePopup = document.getElementById('btnClosePopup');
const div = document.getElementById('popup');

    rules.addEventListener('click', () => {
        popup.classList.add('active');
    });


    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
    });

// Step 2 : User Pick Rock, Paper or Scissors

const paper = document.getElementById('paper');
const imgPaper = document.getElementById('imgPaper');
const scissors = document.getElementById('scissors');
const imgScissors = document.getElementById('imgScissors');
const rock = document.getElementById('rock');
const imgRock = document.getElementById('imgRock');
const stepOne = document.querySelector('.content');
const stepTwo = document.querySelector('.step2');
const stepFour = document.querySelector('.stepFour');
const yourPick = document.getElementById('youPicked');
const housePick = document.getElementById('housePicked');
const houseShadow = document.getElementById('houseShadow');
const btnPlayAgain = document.getElementById('playAgain');
const main = document.querySelector('main');
const btnOpen = document.querySelector('.btnOpen');
let userChoice = '';
let houseChoice = '';


    imgPaper.addEventListener('click', () => {
        userChoice = 'paper';
        stepOne.classList.add('step1');
        stepTwo.style.display = 'block';
        main.style.gap = '9rem';
        btnOpen.style.marginTop = '-5rem';
        yourPick.innerHTML = '<div id="imgPaper" class="imgPaper stepTwo"><img id="paper" src="./images/icon-paper.svg" alt="icon paper"></div>';
        generateHouseChoice();
        generateResult();
        playAgain();
    })

    imgScissors.addEventListener('click', () => {
        userChoice = 'scissors';
        stepOne.classList.add('step1');
        stepTwo.style.display = 'block';
        main.style.gap = '9rem';
        btnOpen.style.marginTop = '-5rem';
        yourPick.innerHTML = '<div id="imgScissors" class="imgScissors stepTwo"><img id="scissors" src="./images/icon-scissors.svg" alt="icon scissors"></div>';
        generateHouseChoice();
        generateResult();
        playAgain();
    })

    imgRock.addEventListener('click', () => {
        userChoice = 'rock';
        stepOne.classList.add('step1');
        stepTwo.style.display = 'block';
        main.style.gap = '9rem';
        btnOpen.style.marginTop = '-5rem';
        yourPick.style.borderColor = 'hsl(349, 71%, 52%)';
        yourPick.innerHTML = '<div id="imgRock" class="imgRock stepTwo"><img id="rock" src="./images/icon-rock.svg" alt="icon rock"></div>';
        generateHouseChoice();
        generateResult();
        playAgain();
    })



    // House Pick + Build the game logic

    const result = document.getElementById('result');
    let currentScore = document.getElementById('currentScore');
    let score = 0;

    function generateHouseChoice() {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 3) + 1;
        
        if (randomNumber === 1) {
            houseChoice = 'rock';
            housePick.innerHTML = '<div id="imgRock" class="imgRock stepTwo"><img id="rock" src="./images/icon-rock.svg" alt="icon rock"></div>';
        }

        if (randomNumber === 2) {
            houseChoice = 'paper';
            housePick.style.borderColor = 'hsl(230, 89%, 62%)';
            housePick.innerHTML = '<div id="imgPaper" class="imgPaper stepTwo"><img id="paper" src="./images/icon-paper.svg" alt="icon paper"></div>';
        }

        if (randomNumber === 3) {
            houseChoice = 'scissors';
            housePick.style.borderColor = 'hsl(39, 89%, 49%)';
            housePick.innerHTML = '<div id="imgScissors" class="imgScissors stepTwo"><img id="scissors" src="./images/icon-scissors.svg" alt="icon scissors"></div>';
        }
        },1000);
        
    }

    function generateResult() {
        setTimeout(() => {

            stepFour.classList.add('active');

        if (userChoice === 'paper' && houseChoice === 'rock') {
            result.innerText = 'you win';
            score++;
            currentScore.innerHTML = score;
        }
        if (userChoice === 'paper' && houseChoice === 'paper') {
            result.innerText = "it's a draw";
            result.style.fontSize = "4.35rem"
        }
        if (userChoice === 'paper' && houseChoice === 'scissors') {
            result.innerText = 'you lose';
            if (score === 0) {return}
            score--;
            currentScore.innerHTML = score;
                   
        }

            // user play with Scissors
        if (userChoice === 'scissors' && houseChoice === 'paper') {
            result.innerText = 'you win';
            score++;
            currentScore.innerHTML = score;
        }
        if (userChoice === 'scissors' && houseChoice === 'scissors') {
            result.innerText = "it's a draw";
            result.style.fontSize = "4.35rem"
        }
        if (userChoice === 'scissors' && houseChoice === 'rock') {
            result.innerText = 'you lose';
            if (score === 0) {return}
            score--;
            currentScore.innerHTML = score;
        }

            // user play with Rock
        if (userChoice === 'rock' && houseChoice === 'scissors') {
            result.innerText = 'you win';
            score++;
            currentScore.innerHTML = score;
        }
        if (userChoice === 'rock' && houseChoice === 'rock') {
            result.innerText = "it's a draw";
            result.style.fontSize = "4.35rem"
        }
        if (userChoice === 'rock' && houseChoice === 'paper') {
            result.innerText = 'you lose';
            if (score === 0) {return}
            score--;
            currentScore.innerHTML = score;
        }
        },1750);
    }


    function playAgain() {
        btnPlayAgain.addEventListener('click', () => {
            stepOne.classList.remove('step1');
            stepTwo.style.display = 'none';
            yourPick.innerHTML = '';
            housePick.innerHTML = '';
            main.style.gap = '';
            result.innerText = '';
            stepFour.classList.remove('active');
        })
    }


  


