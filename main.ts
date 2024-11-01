/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by:  Pablo Carreras 
 * Created on: Oct 2024
 * This program ...
*/

let countdown = 4
let neopixelStrip: neopixel.Strip = null

// setup
basic.showIcon(IconNames.Happy)
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

// countdown from 4
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    countdown = 4
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    
    // countdown loop
    while (countdown >= 0) {
        basic.showNumber(countdown)
        neopixelStrip.show()
        basic.pause(500)
        countdown = countdown - 1
        neopixelStrip.setPixelColor(countdown, neopixel.colors(NeoPixelColors.Black))
    }
    basic.showIcon(IconNames.Happy)
})
