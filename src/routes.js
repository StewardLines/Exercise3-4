"use strict";

module.exports.register = (app, database) => {

    app.get('/', async (req, res) => {
        res.status(200).send("You did it! I am now running:) ").end();
    });

    //Gets all courses or specific course with the name
    app.get('/api/courses', async (req, res) => {
        console.log("=================");
        let query;
        if (req.query.name) {
            let _name = req.query.name;
            query = database.query(
                'select * from course_list where name = ?',
                [_name]
            );
        } else {
            query = database.query(
                'SELECT * FROM course_list'
            );
        }
        console.log(query);
        const emps = await query;

        res.status(200).send(JSON.stringify(emps)).end();
    });


    //Gets courses with a specific course id
    app.get('/api/courses/:id', async (req, res) => {
        let _id = req.params.course_id;
        const query = database.query(
            'select * from course_list where id = ?',
            [_id]
        );
        const emps = await query;
        res.status(200).send(JSON.stringify(emps)).end();
    });


    //Adds new courses
    app.post('/api/courses', async (req, res) => {
        let _courseid = req.body.course_id;
        let _name = req.body.name;
        let _description = req.body.description;

        const query = database.query(
            'insert into course_list(course_id, name, description) values (?, ?, ?)',
            [_courseid, _name, _description]
        );
        const emps = await query;
        res.status(200).send('Course added successfully!').end();
    });

    //Updates the description
    app.post('/api/courses', async (req, res) => {
        let _description = req.body.description;

        const query = database.query(
            'update course_list set description = ?',
            [_description]
        );
        const emps = await query;
        res.status(200).send('Course added successfully!').end();
    });

};
