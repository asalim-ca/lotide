# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @asalim-ca/lotide`

**Require it:**

`const _ = require('@asalim-ca/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head([...])`: Returns the first element of the array.
* `tail([...])`: Returns the array without the head.
* `middle([...])`: If the array has an odd number of elements, returns the element (array of a single element) on the middle, if in the contrary the number of elements in the array is even, returns an array of two elements in the middle.