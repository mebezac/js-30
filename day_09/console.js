const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }]
const p = document.querySelector('p')

function makeGreen() {
  p.style.color = '#BADA55'
  p.style.fontSize = '50px'
}

// Regular
console.log('Hello')

// Interpolated
console.log('Hello I am a %s string!', '🐮')

// Styled
console.log('%c I am some great text', 'font-size:24px; background:blue')

// warning!
console.warn('NOOOOOOO')

// Error :|
console.error('GAHHHH')

// Info
console.info('This is some info')

// Testing
console.assert(1 === 3, 'That is wrong!')

// clearing
// console.clear()

// Viewing DOM Elements
console.log(p)
// get info on methods available
console.dir(p)

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(dog.name)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.log(`${dog.name} is ${dog.age * 7} years old in dog years`)
  console.groupEnd(dog.name)
})

// counting
console.count('Zac')
console.count('Zac')
console.count('Jeff')
console.count('Zac')
console.count('Zac')
console.count('Jeff')
console.count('Jeff')
console.count('Zac')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/mebezac')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data')
    console.log(data)
  })
