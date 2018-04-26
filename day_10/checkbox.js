const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
let lastChecked

function handleCheck(e) {
  // check if they had the shift key down
  // AND check that they are checking the box
  let inBetween = false
  if (e.shiftKey && this.checked) {
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      // if the curent box being checked, or it was the last box checked
      // flip inBetween
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
      }
      // If the checkbox is between the last checked and what was just checked,
      // check the box
      if (inBetween) {
        checkbox.checked = true
      }
    })
  }
  // set the last checked box
  lastChecked = this
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
