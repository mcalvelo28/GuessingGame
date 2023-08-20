let correctnumber = Math.floor(Math.random() * 100) + 1

let turns = 1
const guessbutton = document.getElementsByClassName("guessbutton")[0]

const guesses = document.getElementsByClassName("guesses")[0]
let prevguess = 'Previous guesses: '

const correct = document.getElementsByClassName("correct")[0]

let highorlow = document.getElementsByClassName("highorlow")[0]

function newbutton () {
    const restart = document.createElement("button")
    restart.innerHTML = "Start new game"
    restart.setAttribute("class", "restart-button")
    highorlow.replaceWith(restart)
    guessbutton.setAttribute("disabled", "True")

    restart.addEventListener("click", reset)
}

function reset () {
    guessbutton.removeAttribute("disabled")
    const restartbutton = document.getElementsByClassName("restart-button")[0]
    highorlow = document.createElement("p")
    highorlow.innerHTML = ''
    restartbutton.replaceWith(highorlow) 
    correctnumber = Math.floor(Math.random() * 100) + 1
    turns = 1
    prevguess = 'Previous guesses: '
    guesses.innerHTML = ''
    correct.innerHTML = ''

}

function checkGuess () {
    const guess = Number(document.getElementsByClassName("input-field")[0].value)

    if (turns <= 10) {
        prevguess += guess.toString() + ' '
        guesses.innerHTML = prevguess
        turns += 1
        if (guess === correctnumber) {
            correct.innerHTML = 'Congratulations! You got it right!'
            correct.setAttribute("style", "background-color:green;")
            newbutton()
        } else if (guess < correctnumber){
            correct.innerHTML = 'Wrong!'
            correct.setAttribute("style", "background-color:red;")
            highorlow.innerHTML = 'Last guess was too low!'
        } else {
            correct.innerHTML = 'Wrong!'
            correct.setAttribute("style", "background-color:red;")
            highorlow.innerHTML = 'Last guess was too high!'
        }
    } else {
        correct.innerHTML = '!!!GAME OVER!!!'
        correct.setAttribute("style", "background-color:red;")
        newbutton()
    }
}

guessbutton.addEventListener("click", checkGuess)
