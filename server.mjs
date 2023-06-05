import fs from 'node:fs';

let project = new Array();
fs.readFile('projects.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    try {
        project = JSON.parse(data);
        // console.log(project[0]);
    } catch (error) {
        console.error('Invalid JSON string:', error);
    }
});

// console.log(projects);

// create a server 
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('Root:',__dirname);

const app = express();
const port = 3000;

// set the route
app.use(express.static(__dirname+'/public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/dashboard', function (req, res) {
    const options = {
        root: path.join(__dirname)
    };
 
    const fileName = '/public/dashboard.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});