"use strict";

module.exports.register = (app, database) => {

    app.get('/', async (req, res) => {
        res.status(200).send("You did it! I am now running:) ").end();
    });


    app.get('/courses', async (req, res) => {
        console.log("=================");
        let query;
        if (req.query.name) {
            let _name = req.query.name;
            query = database.query(
                'select * from rest_emp where name = ?',
                [_name]
            );
        } else {
            query = database.query(
                'SELECT * FROM courses'
            );
        }
        console.log(query);
        const emps = await query;

        res.status(200).send(JSON.stringify(emps)).end();
    });



    app.get('/courses/:id', async (req, res) => {
        let _id = req.params.id;
        const query = database.query(
            'select * from courses where course_id = ?',
            [_id]
        );
        const emps = await query;
        res.status(200).send(JSON.stringify(emps)).end();
    });



    app.post('/api/emp', async (req, res) => {
        let _id = req.body.id;
        let _name = req.body.name;
        let _description = req.body.description;

        const query = database.query(
            'insert into courses(course_id, course_name, description) values (?, ?, ?)',
            [_id, _name, _description]
        );
        const emps = await query;
        res.status(200).send('Course added successfully!').end();
    });



};
