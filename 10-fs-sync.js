//filesystem

//read files
const {readFileSync, writeFileSync} = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'content')
console.log(filePath)

console.log("start");
const firstFile = readFileSync(path.join(filePath, 'first.txt'), 'utf-8')

const secondFile = readFileSync(path.join(filePath, 'second.txt'), 'utf-8')

console.log(firstFile , secondFile)

//create a new file if does not exists and writes the value. if file already exists then node by default overrides the content with new one
writeFileSync(path.join(filePath, 'result-sync.txt'), `Here is the result ${firstFile} and ${secondFile}`, {flag:'a'})
console.log("done with the task");
const resultSync = readFileSync(path.join(filePath, 'second.txt'), 'utf-8')
console.log(resultSync)
console.log("starting new task");