const express = require('express');
const app = express();

const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '1234',
        database: 'volonter_db',
        port: 5432
    }
});

app.set("db", db);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/', (req, res) => {
    db
    .select('fname', 'lname').from('person')
    .then(person =>
            res.send(person)
    )

})
/*
person_id,
dob,
role_is,
mobile_number,
has_whatsapp,
id_card,
emergency_contact_number,
fname,
email,
address1,
address2,
lname,
gender,
emergency_contact_fname,
emergency_contact_lname

"person_id"	"integer"
"dob"	"date"
"role_is"	"USER-DEFINED"
"mobile_number"	"integer"
"has_whatsapp"	"boolean"
"id_card"	"character"
"emergency_contact_number"	"character"
"fname"	"character varying"
"email"	"character varying"
"address1"	"character varying"
"address2"	"character varying"
"lname"	"character varying"
"gender"	"character varying"
"emergency_contact_fname"	"character varying"
"emergency_contact_lname"	"character varying"
*/

/*

"creation_date"
"start_date"
"volunteers_required"
"post_date"
"project_id"
"owner_id"
"volunteers_acquired"
"youtube_vid"
"status"
"short_desc"
"main_image"
"title"
"event_location"
"thumbnail"
"html_content"
"photo_gallery"

"creation_date"	"timestamp without time zone"
"start_date"	"date"
"volunteers_required"	"integer"
"post_date"	"date"
"project_id"	"integer"
"owner_id"	"integer"
"volunteers_acquired"	"ARRAY"
"youtube_vid"	"character varying"
"status"	"character varying"
"short_desc"	"character varying"
"main_image"	"text"
"title"	"character varying"
"event_location"	"text"
"thumbnail"	"text"
"html_content"	"text"
"photo_gallery"	"text"
*/