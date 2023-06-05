import { faker } from '@faker-js/faker';

const createProject = () => {

    let title = faker.lorem.words({ min: 8, max: 12 });
    let short_desc = faker.lorem.words({ min: 10, max: 20 });
    let main_image = faker.image.url();
    let thumbnail = faker.image.url();
    let youtube_vid = "https://www.youtube.com/watch?v=WBaPCYFhYRo";
    let event_location = faker.location.streetAddress();
    let contents = faker.lorem.paragraphs(3);
    let creation_date = faker.date.past();
    let start_date = faker.date.future();
    let end_date = faker.date.future();
    let volunteers_required = faker.number.int({ min: 5, max: 20 });
    let volunteers_acquired = 0;
    let owner_id = "";
    let p_status = "draft";
    //create project data
    const projectData = {
        "title": title,
        "location": event_location,
        "status": p_status,
        "start_date": start_date,
        "end_date": end_date,
        "creation_date": creation_date,
        "volunteers_required": volunteers_required,
        "volunteers_acquired": volunteers_acquired,
        "owner_id": owner_id,
        "short_desc": short_desc,
        "thumbnail": thumbnail,
        "main_image": main_image,
        "youtube_vid": youtube_vid,
        "contents": contents,
        "gallery": []
    };
    return projectData;
};

// console.log(createProject());
const projects = [];

for (let i = 0; i < 10; i++) {
  projects.push(createProject());
}
import fs from 'node:fs';
const jsonContent = JSON.stringify(projects, null, 2);
fs.writeFile('projects.txt', jsonContent, function (err) { 
    if (err){ 
        console.log(err);
    }
    else{
        console.log('Write operation complete.');
    }
});