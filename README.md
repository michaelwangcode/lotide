# Lotide

## About 

This is an library of simple functions for arrays and objects in JavaScript.

It is a mini clone of the [Lodash](https://lodash.com) library.

Unit tests for the functions are done using Mocha and Chai.

To run the tests, use `npm install` and `npm test`.

Made during Lighthouse Labs (W01D1).

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @michaelwangcode/lotide`

**Require it:**

`const _ = require('@ michaelwangcode/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Prints whether two arrays are equal
* `assertEqual(...)`: Prints whether two values are equal
* `assertObjectsEqual(...)`: Prints whether two objects are equal
* `countLetters(...)`: Count the number of times each letter appears in a string
* `countOnly(...)`: Count the number of times a name appears in an array
* `eqArrays(...)`: Check if two arrays are equal (deep comparison)
* `eqObjects(...)`: Check if two objects are equal (deep comparison)
* `findKey(...)`: Takes an object and callback function and returns the first key that returns true
* `findKeyByValue(...)`: Find the key of an object given a value
* `flatten(...)`: Flatten an array by one level
* `head(...)`: Return the head of a list (the first element)
* `letterPositions(...)`: Return indexes of all letters in a string
* `map(...)`: Apply a function to every element of an array
* `middle(...)`: Return the middle element(s) of an array
* `tail(...)`: Return the tail of an array (everything after the first element)
* `takeUntil(...)`: Takes an array and callback function and returns elements until a truthy value
* `without(...)`: Remove unwanted items from an array