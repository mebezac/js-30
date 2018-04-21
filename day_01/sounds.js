function playSound(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`)
  const keyDiv = document.querySelector(`.key[data-key="${key}"]`)
  if (!audio) return
  audio.currentTime = 0 // Restarts sound if key pressed again
  audio.play()
  keyDiv.classList.add('playing')
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return
  this.classList.remove('playing')
}

window.addEventListener('keydown', (event) => playSound(event.keyCode))

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
keys.forEach(key => key.addEventListener('touchstart', (event) => playSound(key.dataset.key)))
