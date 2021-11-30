input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.showString(" steps, ")
    basic.showNumber(distance / 100)
    basic.showString(" m")
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
    start_time = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    finish_time = input.runningTime()
    time = (finish_time - start_time) / 1000
    basic.showNumber(time)
    basic.showString("s ,")
    basic.showNumber(time * 15)
    basic.showString("cal")
})
let time = 0
let finish_time = 0
let distance = 0
let start_time = 0
let steps = 0
steps = 0
basic.showNumber(0)
start_time = input.runningTime()
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps += 1
        distance += steps * 26
        basic.showNumber(steps)
    }
})
