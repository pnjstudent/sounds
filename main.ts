input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Asleep)
})
input.setSoundThreshold(SoundThreshold.Loud, 78)
basic.forever(function () {
    led.setBrightness(input.soundLevel())
})
