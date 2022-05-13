const express = require('express');
const mysql = require('mysql2');
const app = express();
app.get('/api/saleitems', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root', // <== ระบุใหถูกตอง
         password: '1234', // <== ระบุใหถูกตอง
        database: 'storebook',
    });
    // เปด connection ไปที่ database
    connection.connect();
    connection.query('SELECT * from user', (err, rows, fields) => {
        if (err) throw err;
        // return response กลับไปหา client โดยแปลง record เปน json array
        res.json(rows);
    });
    // ปด connection
    connection.end();
});

app.get('/api/books', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root', // <== ระบุใหถูกตอง
        password: '1234', // <== ระบุใหถูกตอง
        database: 'storebook',
    });
    // เปด connection ไปที่ database
    connection.connect();
    connection.query('SELECT * from book', (err, rows, fields) => {
        if (err) throw err;
        // return response กลับไปหา client โดยแปลง record เปน json array
        res.json(rows);
    });
    // ปด connection
    connection.end();
});

app.get('/api/employees', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root', // <== ระบุใหถูกตอง
        password: '1234', // <== ระบุใหถูกตอง
        database: 'storebook',
    });
    // เปด connection ไปที่ database
    connection.connect();
    connection.query('SELECT * from employee', (err, rows, fields) => {
        if (err) throw err;
        // return response กลับไปหา client โดยแปลง record เปน json array
        res.json(rows);
    });
    // ปด connection
    connection.end();
});


app.listen(3000, () => {
    console.log('server started on port 3000!');
});
// create table employee (
//     id int auto_increment,
//     firstname varchar(32),
//     lastname varchar(32),
//     age int,
//     created_at timestamp default now(),
//     primary key (id),
//     unique (lastname)
//     );



//    create table book (
//     ISBN varchar(13),
//     name varchar(32),
//     price int,
//     created_at timestamp default now(),
//     primary key (ISBN),
//     unique (ISBN)
//     )

// create table saleitems (
//     ISBN varchar(13),
//     id varchar(32),
//     price int,
//     items int,
//     created_at timestamp default now(),
//     primary key (ISBN),
//     unique (ISBN)
//     )

// insert into employee (firstname, lastname, age) values
// ('Noah', 'Armstrong', 34),
// ('Leslie','Ellis',24),
// ('Sandra', 'Hoffman', 35),
// ('Cameron', 'Meyer', 19),
// ('Cameron', 'Moore', 27);

// insert into book (ISBN, name, price) values
// ('9783598215933', 'The Marquis and I', 250),
// ('9783598215957','Blood on the Tongue',352),
// ('9783598215995', 'A Higher Loyalty', 157),
// ('9783598215919', 'The Mars Room', 199),
// ('9783598215766', 'His Toy', 289);