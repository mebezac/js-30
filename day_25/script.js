const divs = document.querySelectorAll('div')

function logText(e) {
  console.log(this.classList.value)
  // e.stopPropagation() // Don't bubble up
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true //unbind itself, so additional clicks do nothing
}))
