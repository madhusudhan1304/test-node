const http = require('http');
const ar = require('minimist')(process.argv.slice(2));
const fs = require('fs');
let hp;
let pp;
let rp;

fs.readFile("home.html", (err, data) => {
    if (err) throw err;
    hp = data.toString();
})

fs.readFile("project.html", (err, data) => {
    if (err) throw err;
    pp = data.toString();
})

fs.readFile("registration.html", (err, data) => {
    if (err) throw err;
    rp = data.toString();
})

http.createServer((request, response) => {
    let url = request.url;
    response.writeHead(200, {'Content-Type': 'text/html'});
    switch (url) {
        case "/project":
            response.write(pp);
            response.end();
            break;
        case "/registration":
            response.write(rp);
            response.end();
            break;
        default:
            response.write(hp);
            response.end();
            break;
    }
}).listen(ar.port);