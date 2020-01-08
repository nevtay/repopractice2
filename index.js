// get the array of cows
const cows = require("cows")();

// store the array of cows as a value
const index = process.argv[2] || 0;

// choose the cow you want
console.log(cows[index]);