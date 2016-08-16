'use strict'

//creating a function and putting it in a variable
const noArgs =
() => {
  console.log('no args')
}

const oneArgWithParens =
(x) => {
  console.log(`x: ${x}`)
}

//does exactly what the code above it does
const oneArgNoParens =
  x => {
    console.log(`x: ${x}`)
  }

//array.filter((x) => x > 2) //only return stuff in array greater than 2

const oneArgWithDefault =
  (x = 'default') => {
    console.log(`x: ${x}`)
  }

const twoArgs =
(x, y) => {
  console.log('x: ${x}, y: ${y}')
}

const twoArgsWithDefault =
(x, y = 'default') => {
  console.log('x: ${x}, y: ${y}')
}

const restParams =
(... args) => {
  console.log(args)
}

const oneArgWithRestParams =
(x, ...args) => {
  console.log(`x: ${x}`)
  console.log(args)

}

noArgs()
oneArgWithParens(10)
oneArgNoParens(10)
oneArgWithDefault()
twoArgs(10, 20)
twoArgsWithDefault(10)
restParams(1, 2, 3, 4)
// if nothing it will be an empty array not undefined
oneArgWithRestParams(10)

const singeLineValueReturn =
  () =>
    'returned value'

//if you want to do 2 things you need curly brackets
const multiLineValueReturn =
  () => {
    console.log('multi line value return')
    return 'returned value'
  }

  let x = 10
  const singeLineNoReturn =
    () => {
      x += 10
    }

    const multiLineNoReturn =
      () => {
        console.log(`x: ${x}`)
        x += 10
      }

//Testing Functions
console.log(singeLineValueReturn())
console.log(multiLineValueReturn())
console.log(singeLineNoReturn())
console.log(multiLineNoReturn())
