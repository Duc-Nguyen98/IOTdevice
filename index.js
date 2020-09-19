const http = require('http');
const https = require('https');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT ||3004;
const morgan = require('morgan');
const ejs = require('ejs');
const router = require('./src/routers/');
app.use(express.urlencoded({ extended: true })); // gọi đến thư viện body-parser
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,  'src', 'views'));
app.use(express.static(__dirname + '/src/public/'));
router(app)
morgan('dev');


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


