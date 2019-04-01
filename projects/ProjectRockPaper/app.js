
let userScore = 0;
let computerScore = 0;

//cach in the DOM,storing DOM elements in variables for latter use
//instead of referencing document.getElementById()every time when is needed
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const papper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//generating random computer choices,using math.floor to round number generated with math.random times three to get interval from 0-2.
function getComuputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

//r,p,s converting to words, for the display of <p> class= result  
function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

//in case of win 
function win(user, computer){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user)
    console.log("USER WINS.");
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML =`${convertToWord(user)} ${smallUserWord} beats ${convertToWord(computer)} ${smallCompWord}. You win!`;
//when user wins add a class of green glow to Rock, Paper, Scissors div that was pressed, class list gives array of all classes on that element
    userChoice_div.classList.add('green-glow');
//after timer is out remove the class from classlist
    setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 300);
    userMove_div.innerHTML = userChoice_div.innerHTML;
}

//in case of loses
function lose(user, computer){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user)
    console.log("USER LOSES.");
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML =`${convertToWord(user)} ${smallUserWord} loses ${convertToWord(computer)} ${smallCompWord}. You lost!`;
  
//when user wins add a class of red glow to Rock, Paper, Scissors div that was pressed, class list gives array of all classes on that element
    userChoice_div.classList.add('red-glow');
//after timer is out remove the class from classlist
    setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 300);
}

//in case of draw
function draw(user, computer){
    console.log("IT IS DRAW.");
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user)
    result_p.innerHTML =`${convertToWord(user)} ${smallUserWord} ${convertToWord(computer)} ${smallCompWord}. It is draw!`;
///when user wins add a class of gray glow to Rock, Paper, Scissors div that was pressed, class list gives array of all classes on that element
    userChoice_div.classList.add('gray-glow');
//after timer is out remove the class from classlist
    setTimeout(function(){userChoice_div.classList.remove('gray-glow')}, 300);
}

//function for displaying user VS computer move
function displayPlayground(user,comp){
    const userChoice_div = document.getElementById(user);
    const userMove_div = document.getElementById("userMove");
    const compCoice_div = document.getElementById(comp);
    const compMove_div = document.getElementById("compMove")
    userMove_div.innerHTML = userChoice_div.innerHTML;
    compMove_div.innerHTML = compCoice_div.innerHTML;
}

//receiving user Choice, and calling computerChoise and it with userChoice
function game(userChoice){
   const computerChoice = getComuputerChoice()
   displayPlayground(userChoice,computerChoice);
   console.log(userChoice+computerChoice);
    
   switch(userChoice+computerChoice){
       case "rr":
       case "pp":
       case "ss":
        draw(userChoice, computerChoice);
        break;

       case "rs":
       case "pr":
       case "sp":
        win(userChoice, computerChoice);
        break;

       case "sr":
       case "rp":
       case "ps":
        lose(userChoice, computerChoice);
        break;

       default:
       console.log("OPS SOMETHING WENT WRONG");
   }
}

//function event listener on click to call game function with corresponding div id
function main(){
    rock_div.addEventListener("click", function() {
        game("r");
    })

    papper_div.addEventListener("click", function() {
        game("p");
    })

    scissors_div.addEventListener("click", function() {
        game("s");
    })
}

main();

