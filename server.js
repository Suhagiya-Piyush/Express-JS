/*// todo -------------------------------- Lesson 4 (08/08/24)-------------------------------- */

const express = require('express');
const server = express();
// const data = require('./Data/friends.json');
// console.log(data);
const fs = require('fs');
const data = fs.readFileSync("./Data/friends.json", "utf-8");

const morgan = require('morgan');

// 4.0 verson -> body-parser
// express.json -> raw / json formate
// express.urlencoded -> form
// express.static

server.use(express.json());
// server.use(express.urlencoded({extended:true}));
// server.use('/hello', express.static('./Data/friends.json'));
server.use(morgan('dev'));

let middelware = (req, res, next) => {
    // console.log(req.query);
    if(req.query.age >= 18){
        // console.log('Success');
        next();
    }else{
        return res.json({message : 'Inccorect Way!!!'});
    }
}
let loggerFun = (req, res, next) => {
    console.log(req.url, "\t", req.method, "\t");
    next();
}
server.use(loggerFun)

/* ---------------------------- Application Level Middelware--------------------------- */
// server.use(middelware);

/* ------------------------------ Router Level Middelware------------------------------ */
server.get('/',middelware, (req, res) => {
    res.send({message : 'Welcome to Express Server'});
});

server.get('/friend', (req, res) => {
    res.json(JSON.parse(data));
});

server.listen(1234, () => {
    console.log('Server start at http://localhost:1234');
});
