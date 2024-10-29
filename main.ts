/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by:  Pablo Carreras 
 * Created on: Oct 2024
 * This program ...
*/

let numberCountDown = 4
let neopixelStrip: neopixel.Strip = null

// setup 
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function(){
    while(numberCountDown > 0){
        basic.showNumber(numberCountDown)
        numberCountDown = numberCountDown - 1
        basic.pause(500)
        if (numberCountDown == 4) {
            basic.showNumber(numberCountDown)
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
            neopixelStrip.show()
            basic.pause(500)
        }
    }
})