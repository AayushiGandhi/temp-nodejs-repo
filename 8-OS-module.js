const os = require('os') //inbuilt module of os

console.log(os.userInfo());

//get uptime of the system (for how long the computer has been running in seconds)
console.log(`The uptime of the user is: ${os.uptime}`);

const currentOSInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOSInfo)