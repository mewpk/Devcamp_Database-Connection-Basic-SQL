const express = require('express');
const mysql = require('mysql2');
const app = express();
app.get('/api/users', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root', // <== ระบุใหถูกตอง
        // password: 'YES', // <== ระบุใหถูกตอง
        database: 'codecamp',
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
app.listen(3000, () => {
    console.log('server started on port 3000!');
});
