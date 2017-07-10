var userChoice = prompt("Do you choose rock, paper or scissors?");
if (userChoice !== "rock" && userChoice !== "rock"){
        if(userChoice !== "paper" && userChoice !== "paper") {
            if(userChoice !== "scissors" && userChoice !== "scissors") {
            console.log("Not an option");
        } else {
             console.log("Can't find any option");
        }
    }
    }

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return ("The result is tie");
    }
    if(choice1 === "rock") {
        if(choice2 === "scissors"){
            return ("The rock wins");
        } else {
            return ("paper wins");
        }
    }
    else if (choice1 === "paper") {
    if (choice2 === "rock") {
        return ("paper wins");
    } else {
        return ("scissors wins");
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return ("rock wins");
        } else {
            return ("scissors wins");
        }
    }
    }
};

console.log(compare(userChoice, computerChoice));
