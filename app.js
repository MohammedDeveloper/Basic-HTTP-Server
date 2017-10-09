/// Create the constants
const http = require("http");
const fs = require("fs");

/// set the port and host
const port = 7868;
const hostname = "127.0.0.1";

/// 1. Send an sample text
/// 2. Send the file

/// read the file..
fs.readFile("index.html", (err, html) => {

    /// check for err
    if (err) {
        throw err;
    }
    /// create the server
    const server = http.createServer((req, res) => {

        /// status code
        res.statusCode = 200;

        /// header
        /// 1. Send an sample text
        //res.setHeader("Content-type", "text/plain");

        /// 2. Send the file
        res.setHeader("Content-type", "text/html");

        /// end
        /// 1. Send an sample text
        //res.end("Hello Rafi!");

        /// end
        /// 2. Send the file
        res.write(html);
        res.end();
    });

    /// set the end - listen 
    server.listen(port, hostname, () => {

        /// Log some default text...
        console.log("Server started at http://localhost:" + port + " or http://" + hostname + ":" + port);
    });
});


