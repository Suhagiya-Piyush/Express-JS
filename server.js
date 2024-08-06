const express = require("express");
const server = express();

server.get('/', (req, res) => {
    res.send('Welcome to Express Server');
    res.end();
});
server.get('/login', (req, res) => {
    res.send('Welcome to Login Page');
    res.end();
});
server.listen(1234, () => {
    console.log(`Server Start at http://localhost:1234`);
});
