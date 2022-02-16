const http = require('http')

const server = http.createServer((req, res) => {

    if(req.url == '/' ){
        res.write(`
        <h1>Welcome to the very 1st nodejs website - home page</h1>
        <p>paragraphhhhhhhh</p>
        <a href='/about'>about page</a>
        `)
        res.end();
    }
    else if(req.url == '/about') {
        res.write("Welcome to the very 1st nodejs website - about page")
        res.end();
    }
    else{
        res.write(`
        <h1>404 - Page not found</h1>
        <a href='/'>home page</a>`)

        res.end();
    }    
})

server.listen(5000)
