const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90 // offset the initial 90 degree rotate
  if (seconds === 0 || seconds === 1) secondHand.classList.toggle('hand-transition') // Don't get jumpy transition at 12 position
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const minutes = now.getMinutes()
  const minutesDegrees = ((minutes / 60) * 360) + 90 // offset the initial 90 degree rotate
  if (seconds === 0 || seconds === 1) minuteHand.classList.toggle('hand-transition') // Don't get jumpy transition at 12 position
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

  var hours = now.getHours() // 0 - 23
  if (hours > 12) hours = hours - 12
  const hoursDegrees = ((hours / 12) * 360) + 90 // offset the initial 90 degree rotate
  if (seconds === 0 || seconds === 1) hourHand.classList.toggle('hand-transition') // Don't get jumpy transition at 12 position
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)
