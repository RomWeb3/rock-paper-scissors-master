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
const stepFour = document.querySelector('.step4');
const yourPick = document.getElementById('youPicked');
const housePick = document.getElementById('housePicked');
const houseShadow = document.getElementById('houseShadow');
const btnPlayAgain = document.getElementById('playAgain');
const main = document.querySelector('main');
const btnOpen = document.querySelector('.btnOpen');
let userChoice = '';
let houseChoice = '';


    const paperUser = paper.cloneNode(true);
    const scissorsUser = scissors.cloneNode(true);
    const rockUser = rock.cloneNode(true);
    const paperHouse = paper.cloneNode(true);
    const scissorsHouse = scissors.cloneNode(true);
    const rockHouse = rock.cloneNode(true);
    


    imgPaper.addEventListener('click', () => {
        userChoice = 'paper';
        stepOne.classList.add('step1');
        stepTwo.style.display = 'block';
        main.style.gap = '9rem';
        btnOpen.style.marginTop = '-5rem';
        yourPick.style.borderColor = 'hsl(230, 89%, 62%)';
        yourPick.appendChild(paperUser);
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
        yourPick.style.borderColor = 'hsl(39, 89%, 49%)';
        yourPick.appendChild(scissorsUser);
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
        yourPick.appendChild(rockUser);
        generateHouseChoice();
        generateResult();
        playAgain();
    })



    // House Pick + Build the game logic

    const result = document.getElementById('result');
    let currentScore = document.getElementById('currentScore');
    let score = 0;

    function generateHouseChoice() {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        
        if (randomNumber === 1) {
            houseChoice = 'rock';
            housePick.style.borderColor = 'hsl(349, 71%, 52%)';
            housePick.appendChild(rockHouse);
        }

        if (randomNumber === 2) {
            houseChoice = 'paper';
            housePick.style.borderColor = 'hsl(230, 89%, 62%)';
            housePick.appendChild(paperHouse);
        }

        if (randomNumber === 3) {
            houseChoice = 'scissors';
            housePick.style.borderColor = 'hsl(39, 89%, 49%)';
            housePick.appendChild(scissorsHouse);
        }
    }

    function generateResult() {
            // user play with Paper
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
            houseShadow.classList.add('active');
                   
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
            houseShadow.classList.add('active'); 
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
            houseShadow.classList.add('active');
        }
        
    }


    function playAgain() {
        btnPlayAgain.addEventListener('click', () => {
            stepOne.classList.remove('step1');
            stepTwo.style.display = 'none';
            if (userChoice === 'paper' && houseChoice === 'paper') {
            yourPick.removeChild(paperUser);
            housePick.removeChild(paperHouse);
            main.style.gap = '';
            }
            if (userChoice === 'scissors' && houseChoice === 'scissors') {
            yourPick.removeChild(scissorsUser);
            housePick.removeChild(scissorsHouse);
            main.style.gap = '';
            }
            if (userChoice === 'rock' && houseChoice === 'rock') {
            yourPick.removeChild(rockUser);
            housePick.removeChild(rockHouse);
            main.style.gap = '';
            }
            if (userChoice === 'paper' && houseChoice === 'rock') {
            yourPick.removeChild(paperUser);
            housePick.removeChild(rockHouse);
            main.style.gap = '';
            }
            if (userChoice === 'paper' && houseChoice === 'scissors') {
            yourPick.removeChild(paperUser);
            housePick.removeChild(scissorsHouse);
            main.style.gap = '';
            houseShadow.classList.remove('active');
            }
            if (userChoice === 'scissors' && houseChoice === 'paper') {
            yourPick.removeChild(scissorsUser);
            housePick.removeChild(paperHouse);
            main.style.gap = '';
            }
            if (userChoice === 'scissors' && houseChoice === 'rock') {
            yourPick.removeChild(scissorsUser);
            housePick.removeChild(rockHouse);
            main.style.gap = '';
            houseShadow.classList.remove('active');
            }
            if (userChoice === 'rock' && houseChoice === 'paper') {
            yourPick.removeChild(rockUser);
            housePick.removeChild(paperHouse);
            main.style.gap = '';
            houseShadow.classList.remove('active');
            }
            if (userChoice === 'rock' && houseChoice === 'scissors') {
            yourPick.removeChild(rockUser);
            housePick.removeChild(scissorsHouse);
            main.style.gap = '';
            }
        })
    }


  


