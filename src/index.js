const express = require('express');
const path = require('path');
const app = express();
const port = 3003;
const morgan = require('morgan');
const ejs = require('ejs');
const router = require('./routers/index');
const weather = require('openweather-apis');
app.use(express.urlencoded({ extended: true })); // gọi đến thư viện body-parser
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,  'views'));
app.use(express.static(__dirname + '/public/'));
router(app)
morgan('dev');

app.listen(port, () => console.log(`http://localhost:${port}`));


