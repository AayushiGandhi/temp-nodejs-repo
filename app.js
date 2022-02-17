//INSTALLING NPM
//there are 2 ways of installing npm
//1. instal it as a local dependency: meaning that only the current project will use npm
    // npm i <packagename>
//2. global dependency: meaning any project can use it
    // npm insall -g <packagename>


//INITIALIZING NPM
//package.json : manifest file that stores important info about package/project : create it in root - manual approach
//npm init (asks questions step by step, press enter to skip)
//npm init -y (everything default) : by defau;t the package name will be the folder name of the project

const _ = require('lodash');

const items = [1, [2, [3, [4, 5], 6]]]
const flat_items = _.flattenDeep(items)
console.log(flat_items)
console.log("hello world")
console.log("hiiiiiiiii")
//nodemon is used to restart our application

//npm i nodemon --D