# Exercise 3-4 Backend

Steps to run the code:

1. Create a .env file in the root directory with the template given in the .env-template file. The values should specify the host, database, and user and password to connect to the database.

2. npm install

3. npm start

# Endpoints

|Method| Endpoint|Parameters|Description|
|-------------|-------------|-----|-----|
|GET|/courses||Returns a list of all courses|
|GET|/course/<course_id>|Returns the course identify by the course_id|
|POST|/courses|course_id, course_name, description|Add new course|
|PUT|/courses|course_id, description|Change the description of the given course_id|



