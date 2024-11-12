require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const host = process.env.HOST || 'http://localhost';
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

// app.use('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });

app.listen(port, () => {
    console.clear();
    console.log(`Server is running on ${host}:${port}`);
});