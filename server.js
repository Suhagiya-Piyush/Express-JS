// nom init / npm init -y

const express = require("express");

// http.createSeaver();
const server = express();

// CRUD -> Create(POST), Read(GET), Update(PUT, PATCH), Delete(DELETE)
server.get('/', (req, res) => {
    res.write('Welcome to Express Server');
    res.end();
});
// server.get('/login', (req, res) => {
//     res.send('Welcome to Login Page');
// });

server.get("/user", (req, res) => {
    res.status(200);
    res.json({message : 'User GET Method'});
})
server.post("/user", (req, res) => {
    res.status(201);
    res.json({message : 'User POST Method'});
})
server.put("/user", (req, res) => {
    res.status(202);
    res.json({message : 'User PUT Method'});
})
server.patch("/user", (req, res) => {
    // res.status(199);
    res.json({message : 'User PATCH Method'});
})
server.delete("/user", (req, res) => {
    res.status(400);
    res.json({message : 'User DELETE Method'});
})
server.patch("/admin", (req, res) => {
    res.status(404);
    res.json({message : 'Admin PATCH Method'});
})
server.delete("/admin", (req, res) => {
    res.status(500);
    res.json({message : 'Admin DELETE Method'});
})

server.listen(1234, () => {
    console.log(`Server Start at http://localhost:1234`);
});



// git checkout -b branchName
// git add . 
// git commit -m "your commit"
// git push -u origin branchName