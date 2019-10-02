let computerGuess = Math.floor(Math.random() * 100)


let availableGuesses = 5


let guessTotal = 0
const guesses = []

function onGuessNumber() {
    guessTotal += 1
    if (availableGuesses === 0) {
        document.getElementById("prompt").innerHTML = 'Out of guesses'
        return 
    }

    const userGuess = document.getElementById("guess").value

    guesses.push(userGuess)

    if (userGuess < computerGuess) {
        document.getElementById("prompt").innerHTML = 'Only ' + (availableGuesses - 1) + ' guesses left!'
    }
    if (userGuess > computerGuess) {
        document.getElementById("prompt").innerHTML = 'Only ' + (availableGuesses - 1) + ' guesses left!'
    }
    if (userGuess == computerGuess) {
        document.getElementById("prompt").innerHTML = 'You WIN'
    }

    availableGuesses == 1
    
    if (availableGuesses == 1) {
        document.getElementById("prompt").innerHTML = 'Last Try!'
    }

    availableGuesses -= 1
    if (availableGuesses == 0) {
        document.getElementById("prompt").innerHTML = 'You Lost'
    }

    // Stop the guesses.map from repeating
    document.getElementById("guessesTracker").innerHTML = ''
    
    // Stick the guess in a list
    guesses.map(guess => {
        let message
        if (guess > computerGuess) {
            message = `${guess} is too HIGH`
        }
        if (guess < computerGuess) {
            message = `${guess} is too LOW`
        }
        if (guess == computerGuess) {
            message = `${guess} is CORRECT!`
        }
        var node = document.createElement("LI");
        var textnode = document.createTextNode(message);
        node.appendChild(textnode);
        document.getElementById("guessesTracker").appendChild(node);
    })
}

// function restart () {
//     availableGuesses = 5;
//     computerGuess = Math.floor(Math.random() * 100);
    // document.getElementById  
// }

console.log(computerGuess)