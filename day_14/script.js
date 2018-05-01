// start with strings, numbers and booleans
let age = 100
let age2 = age
console.log(age, age2) // 100, 100
age = 200
console.log(age, age2) // 200, 100

let name = 'Zac'
let name2 = name
console.log(name, name2) // Zac, Zac
name = 'Zachariah'
console.log(name, name2) // Zachariah, Zac

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']

// and we want to make a copy of it.
// const team = players
// console.log(players, team)
// You might think we can just do something like this:
// team[3] = 'Lux'
// console.log(players, team)
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice()
team2[3] = 'Changed 2'

// or create a new array and concat the old one in
const team3 = [].concat(players)
team3[3] = 'Changed 3'

// or use the new ES6 Spread
const team4 = [...players]
team4[3] = 'Changed 4'

// or us Array.from
const team5 = Array.from(players)
team5[3] = 'Changed 5'

// now when we update it, the original one isn't changed
console.log(players, team2, team3, team4, team5)

// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
}

// and think we make a copy:
const captain = person // If you change captain, it will update the original

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { name: 'Zac', number: 99, age: 12 })
console.log(person, captain2)

// We will hopefully soon see the object ...spread
// i.e. const captain3 = {...person}

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const zac = {
  name: 'Zac',
  age: 28,
  social: {
    twitter: 'mebezac'
  }
}

const clone = Object.assign({}, zac)
clone.name = 'clone'
console.log(zac, clone) // Original not touched
clone.social.twitter = "clone"
console.log(zac, clone) // Original IS touched
