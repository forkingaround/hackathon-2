import fs from 'node:fs';

const projects = [];

fs.readFile('projects.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    projects = data.split(',');
});

console.log(projects);