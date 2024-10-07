/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let userInput = document.getElementById("user-input")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    const input = userInput.value
    
    const meterToFeet = input * 3.281
    const feetToMeter = input / 3.281
    length.innerHTML = `<p id="length">${input} meters = ${meterToFeet.toFixed(3)} feet | ${input} feet = ${feetToMeter.toFixed(3)} meters</p>`
    
    const literToGallon = input * 0.264
    const gallonToLiter = input / 0.264
    volume.innerHTML = `<p id="volume">${input} liters = ${literToGallon.toFixed(3)} gallons | ${input} gallons = ${gallonToLiter.toFixed(3)} liters</p>`
    
    const kiloToPound = input * 2.204
    const poundToKilo = input / 2.204 
    mass.innerHTML = `<p id="mass">${input} kilos = ${kiloToPound.toFixed(3)} pounds | ${input} pounds = ${poundToKilo.toFixed(3)} kilos</p>`
})