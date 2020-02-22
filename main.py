def on_forever():
    pause(600000)
    for index in range(7):
        mouse.move(22, -9)
        pause(100)
        mouse.move(-22, 9)
        pause(100)
loops.forever(on_forever)