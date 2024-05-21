const getUserChoice =  userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput

    
} else{
    console.log('Please type: rock, paper or scissors')
}

}
  
console.log(getUserChoice('rock'))
console.log(getUserChoice('potato'))

const  getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() *3);
  switch(randomNumber){
      case 0:
          return 'rock';
          case 1:
              return 'paper';
              case 2:
                  return 'scissors'
  }

};

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

const determineWinner =  (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
         return'This game is a tie'
    }
    if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'Computer won'
        } else {
            return 'Congrats you won!'
        }

    }

    if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'Sorry, computer won'
        } else{
            return 'Congrats, you won'
        }
    }

    if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return 'Sorry, computer won'
        } else{
            return 'Congrats, you won!'
        }
    }

};


console.log(determineWinner('rock' , 'scissors'));
console.log(determineWinner('paper' , 'rock'));
console.log(determineWinner('scissors' , 'scissors'));

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw:' + userChoice)
    console.log('The computer threw:' + computerChoice);
}

