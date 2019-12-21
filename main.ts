function Fibonacci (num: number) {
    x = 1
    y = 1
    t = num
    while (t >= 3) {
        nextTerm = x + y
        t += -1
        x = y
        y = nextTerm
    }
    basic.showNumber(nextTerm)
}
let nextTerm = 0
let t = 0
let y = 0
let x = 0
Fibonacci(7)
basic.forever(function () {
	
})
