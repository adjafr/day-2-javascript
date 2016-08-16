'use strict'

function noArgs() {
  console.log('no args, no return')
}

function noArgs() {
  return 'something'
}

function oneArg (x) {
  console.log(`x: ${x}`)
}

function oneArgWithDefault (x = 'default') { //there's this default that has this value and if they call it with another value
  console.log('x: ${x}')
}

function twoArgs (x, y) { //creating a funtion without putting it in a variable
  console.log('x: ${x}, y: ${y}')
}

function twoArgsWithDefault (x, y = 'default') {
  console.log('x: ${x}, y: ${y}')
}

//this puts 10 in y and leaves x undefined or you can put undefined, 10 inside parenthesis for y to be 10
twoArgsWithDefault(10)

function restParams (... args) {
  console.log(args)
}

//rest params means the rest of the parameters
function OneArgWithRestParams (x, ... rest) {
    console.log('x: ${x}')
    console.log(rest)
}

noArgs()
oneArg(10)
oneArgWithDefault()
twoArgs(10, 20)
twoArgsWithDefault(10)
restParams(1, 2, 3, 4)
OneArgWithRestParams(10) //if nothing it will be an empty array not undefined

function singleLineValueReturning () {
  return 'returned' + ' ' + 'value'
}

function multiLineValueReturn () {
  console.log('multi line value return')
  return 'returned value'
}

let x = 10
function singeLineNoReturn () {
  x += 10
}

function multiLineNoReturn () {
  console.log(`x: ${x}`)
  x += 10
}

console.log(singleLineValueReturning())
console.log(multiLineValueReturn())
console.log(singeLineNoReturn())
console.log(multiLineNoReturn())
