require('dotenv').config();
const express = require('express');
const connectDB = require('./server/config/db');
const expressEjsLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.static('public'));

//templating
app.use(expressEjsLayouts);
app.set('layout' , './layouts/main');
app.set('view engine', 'ejs');

app.use('/',require('./server/routes/main'));

app.listen(PORT, ()=>{
    console.log("App listening");
})
