const express = require('express');
const sql = require('mssql');
const app = express();
const port = 3000;

app.use(express.json());

const sqlConfig = {
    server: '172.187.184.173',
    database: 'Fion1DB',
    user: 'sa',
    password: 'Cheesecake!1',
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

// Default route localhost:3000
app.get('/', (req, res) => {
    res.send('Default route found.');
})

// Watch route localhost:3000/watch
app.get('/watch', (req, res) => {
    res.send('Play video.');
})

// Watch route with videoId route parameter localhost:3000/watch/001
app.get('/watch/:videoId', (req, res) => {

    const videoId = req.params.videoId;
    res.send(`Playing video ${videoId}.`);
})

// Create an HTTP GET method to multiply two numbers
// together using route params.
// Solution 1 using localhost:3000/multiply/4/12
app.get('/multiply/:num1/:num2', (req, res) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;
    res.send(`${num1} x ${num2} = ${num1*num2}`);
})

// Solution 2 using localhost:3000/multiply/4&12
app.get('/multiply/:num1&:num2', (req, res) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;
    res.send(`${num1} x ${num2} = ${num1*num2}`);
})

// Get employeeId from query parameters localhost:3000?employeeId=001
app.get('/employees', (req, res) => {

    const employeeId = req.query.employeeId;
    const employeeName = req.query.employeeName;
    res.send(`Employee ${employeeId} : ${employeeName}`);
})

app.get('/multiply', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    res.send(`${num1} x ${num2} = ${num1*num2}`);
})

app.get('/countries/:countryCode', async (req, res) => {

    const countryCode = req.params.countryCode;

    try {

        await sql.connect(sqlConfig);
        var request = new sql.Request();
        request.input('country_id', sql.VarChar, countryCode);
        const query = `
            SELECT *
            FROM countries
            WHERE country_id = @country_id
        `;

        const result = await request.query(query);

        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Error connecting to database."});
    }
})
//

app.get('/books', async (req, res) => {

    const booksName = req.params.booksName;

    try {

        await sql.connect(sqlConfig);
        var request = new sql.Request();
        const query = `
            SELECT *
            FROM books

        `;

        const result = await request.query(query);

        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Error connecting to database."});
    }
})
//
app.post('/books', async (req, res) => {
    console.log(req.body);
    const bookName = req.body.bookName;
    const author= req.body.author;
    const publicationDate = req.body.publicationDate;
    const isbn = req.body.isbn;
    const available = req.body.available;

    try {

        await sql.connect(sqlConfig);
        var request = new sql.Request();
        request.input('bookName', sql.VarChar, bookName);
        request.input('author', sql.VarChar, author);
        request.input('ISBN', sql.VarChar, isbn);
        request.input('available', sql.VarChar, available);
        request

        const query =
        `INSERT INTO books

        ( book_name,
            author,
            publicationDate,
            ISBN,
            available,
            image
             )


            VALUES
            (
                @bookName,
                @author,
                @publicationDate,
                @isbn,
                @available,
                @image
            );`;

                const result = await request.query(query);

                res.json(result);
    }
            catch (error) {
                console.log(error)
                res.sendStatus('500');
            }



})

app.post('/books', (req, res) => {
    const param1 = req.body.param1;
    res.send('Post books.');
})




app.listen(port, () => {
    console.log('Service listening.');
})
