const path = require('path')

console.log(path.sep)

const filePath = path.join('./content', 'subfolder', 'test.txt')
console.log(filePath)

const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);
console.log(baseName)
console.log(dirName)
//or
const {basename, dirname} = require('path')
console.log(basename(filePath))


//gives absolute path
const absolutePath = path.resolve(filePath)
console.log(absolutePath)
console.log(path.resolve(__dirname, filePath))