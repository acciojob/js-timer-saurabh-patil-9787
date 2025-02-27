// write js code here if required
let timeOutput = document.getElementById('timer')
let date = new Date()


let month = date.getUTCMonth()
let year = date.getUTCFullYear()
let day = date.getUTCDay()

let hours = date.getUTCHours();
let min = date.getUTCMinutes();
let sec = date.getUTCSeconds();

let timeToday = (`${day}/${month}/${year},${hours}:${min}:${sec}`)

timeOutput.innerText = timeToday

