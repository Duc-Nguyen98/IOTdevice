const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT ||3003;
const morgan = require('morgan');
const ejs = require('ejs');
const router = require('./routers/index');
app.use(express.urlencoded({ extended: true })); // gọi đến thư viện body-parser
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,  'views'));
app.use(express.static(__dirname + '/public/'));
router(app)
morgan('dev');


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


