import fs from 'node:fs';

let project = new Array();
fs.readFile('projects.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    try {
        project = JSON.parse(data);
        console.log(project[0]);
    } catch (error) {
        console.error('Invalid JSON string:', error);
    }
});

// console.log(projects);


import express from 'express';
// create a server 
const app = express();
const port = 3000;
// set the route
app.get('/', (req, res) => {
    res.send('Hello World!');
});