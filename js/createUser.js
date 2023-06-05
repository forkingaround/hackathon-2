import { faker } from '@faker-js/faker';

/*
emergency_contact_number,
emergency_contact_fname,
emergency_contact_lname
*/
const createUser = () => {
  // creating project owners
  let gender = faker.person.sexType(); //console.log(gender);
  let fname = faker.person.firstName(gender); //console.log(fname);
  let lname = faker.person.lastName(); //console.log(lname);
  let avatar = faker.image.avatar(); //console.log(avatar);
  let dob = new Date(faker.date.birthdate({ min: 18, max: 65, mode: 'age' }));
  //console.log(dob);

  //let role_is = 'Project Owner';
  let mobile = '5' + faker.helpers.arrayElement(['496', '800', '769', '946', '761', '780', '252', '845']) + faker.string.numeric({ length: 4, allowLeadingZeros: true });// console.log(mobile_main);
  // let mobile_other = '5' + faker.helpers.arrayElement(['496', '800', '769', '946', '761', '780', '252', '845']) + faker.string.numeric({ length: 4, allowLeadingZeros: true });// console.log(mobile_other);
  let landline = faker.string.numeric({ length: 7, allowLeadingZeros: false });// console.log(landline);
  let bio = faker.person.bio(); //console.log(bio);
  let email = faker.internet.email({ firstName: fname, lastName: lname });
  //console.log(email);

  let d = (() => dob.getDate() > 9 ? dob.getDate() : '0' + (dob.getDate()))();
  let m = (() => dob.getMonth() > 9 ? dob.getMonth() + 1 : '0' + (dob.getMonth() + 1))();
  let id_card_number = lname[0] + d + m + dob.getFullYear().toString().slice(-2) + faker.string.numeric({ length: 7, allowLeadingZeros: true });
  //console.log(id_card_number);

  let address1 = faker.location.streetAddress(false); //console.log(address1);
  let address2 = faker.location.city(); //console.log(address2);
  let address3 = faker.location.state(); //console.log(address3);

  const JSONDATA = {
    "info": {
      "fname": fname,
      "lname": lname,
      "dob": dob,
      "gender": gender,
      "id_card_number": id_card_number,
      "bio": bio,
      "avatar": avatar
    },
    "contact": {
      "mobile": mobile,
      "landline": landline,
      "email": email,
      "address1": address1,
      "address2": address2,
      "address3": address3
    },
    "activity": {
      "projects-owned": [],
      "projects-volunteered": []
    }
  };
  return JSONDATA;
};

const users = [];
// console.log(createUser());
for (let i = 0; i < 10; i++) {
  users.push(createUser());
}

// console.log(users);
// const fs = import('fs');
import fs from 'node:fs';
const jsonContent = JSON.stringify(users, null, 2);
fs.writeFile('users.txt', jsonContent, function (err) { 
    if (err){ 
        console.log(err);
    }
    else{
        console.log('Write operation complete.');
    }
});
