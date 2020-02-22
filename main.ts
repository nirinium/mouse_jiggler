loops.forever(function on_forever() {
    pause(600000)
    for (let index = 0; index < 7; index++) {
        mouse.move(22, -9)
        pause(100)
        mouse.move(-22, 9)
        pause(100)
    }
})
