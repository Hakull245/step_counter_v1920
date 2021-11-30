input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(distance)
})
input.onGesture(Gesture.Shake, function () {
	
})
let distance = 0
let steps = 0
steps = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps += 1
        distance += steps * 16
        basic.showNumber(steps)
    }
})
