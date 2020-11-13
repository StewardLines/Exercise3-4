"use strict";

module.exports.register = (app, database) => {

    app.get('/', async (req, res) => {
        res.status(200).send("You did it! I am now running:) this code works!!!!!!!!!! ").end();
    });


    app.get('/courses', async (req, res) => {
        console.log("=================");
        let query;
        const query = database.query(
            'select * from courses ;'
        );
        
        console.log(query);
        const courses = await query;

        res.status(200).send(JSON.stringify(course)).end();
        });
    /*
    //Gets all courses or specific course with the name
    app.get('/courses', async (req, res) => {
        console.log("=================");
        let query;
        if (req.query.name) {
            let _name = req.query.name;
            query = database.query(
                'select * from courses where course_name = ?;',
                [_name]
            );
        } else {
            query = database.query(
                'SELECT * FROM courses;'
            );
        }
        console.log(query);
        const courses = await query;

        res.status(200).send(JSON.stringify(courses)).end();
    });


    //Gets courses with a specific course id
    app.get('/courses/:id', async (req, res) => {
        let _id = req.params.course_id;
        const query = database.query(
            'select * from courses where course_id = ?;',
            [_id]
        );
        const courses = await query;
        res.status(200).send(JSON.stringify(courses)).end();
    });


    //Adds new courses
    app.post('/courses', async (req, res) => {
        let _courseid = req.body.course_id;
        let _name = req.body.name;
        let _description = req.body.description;

        const query = database.query(
            'insert into courses(course_id, course_name, description) values (?, ?, ?);',
            [_courseid, _name, _description]
        );
        const courses = await query;
        res.status(200).send('Course added successfully!').end();
    });

    //Updates the description
    app.post('/courses', async (req, res) => {
        let _description = req.body.description;

        const query = database.query(
            'update courses set description = ?;',
            [_description]
        );
        const courses = await query;
        res.status(200).send('Course added successfully!').end();
    });
*/
};
