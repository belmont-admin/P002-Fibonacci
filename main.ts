input.onButtonPressed(Button.AB, function () {
    displayAnswer = true
    Fibonacci(term)
})
input.onButtonPressed(Button.B, function () {
    displayAnswer = false
    term += 1
    basic.showNumber(term)
})
function Fibonacci (num: number) {
    basic.showString("?")
    x = 1
    y = 1
    t = num
    while (t >= 3) {
        nextTerm = x + y
        t += -1
        x = y
        y = nextTerm
    }
    while (displayAnswer == true) {
        basic.showString("=")
        basic.pause(100)
        basic.showNumber(nextTerm)
    }
}
input.onButtonPressed(Button.A, function () {
    displayAnswer = false
    if (term > 3) {
        term += -1
    }
    basic.showNumber(term)
})
let nextTerm = 0
let t = 0
let y = 0
let x = 0
let displayAnswer = false
let term = 0
term = 3
basic.showNumber(term)
displayAnswer = false
