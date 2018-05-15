const slider = document.querySelector('.items')
let isDown = false
let startX, startScrollLeft

slider.addEventListener('mousedown', (e) => {
  isDown = true
  slider.classList.add('active')
  startScrollLeft = slider.scrollLeft
  startX = e.pageX - slider.offsetLeft
})

slider.addEventListener('mouseleave', () => {
  isDown = false
  slider.classList.remove('active')
})

slider.addEventListener('mouseup', () => {
  isDown = false
  slider.classList.remove('active')
})

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return // stop unless clicked
  e.preventDefault() // Don't select text
  const x = e.pageX - slider.offsetLeft
  const walk = x - startX // How far have we moved from where we first clicked
  slider.scrollLeft = startScrollLeft - walk
})
