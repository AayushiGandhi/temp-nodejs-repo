//filesystem

//read files
const {readFile, writeFile} = require('fs')

console.log("start");
const firstFile = readFile('./content/first.txt', 'utf-8', ( err, result) => {
    if(err) {
        console.log(err)
    }
    else{
        console.log(result)
        const first = result

        readFile('./content/second.txt', 'utf-8', ( err, result) => {
            if(err) {
                console.log(err)
            }
            else{
                console.log(result)
                const second= result

                writeFile(('./content/result-sync.txt'), `Here is the result ${first} and ${second}`, {flag:'a'}, (err, result) => {
                    if(err){
                        console.log("error in write")
                    }
                    else{
                        console.log(result)
                        console.log("done with the task");
                    }
                })
            }
        })
    }
})
console.log("starting next task");