const express = require('express');
const bodyParser = require('body-parser');
const auth = require("./controller/auth.js");

const app = express();
const route = express.Router();

//Setup Port for Web App
const port = process.env.PORT || 5000;

///Setup static folder
app.use(express.static('public'));

//Setup Ejs as View Engine
app.set('views', process.cwd() + '/views');
app.set('view engine', 'ejs');

//using bodyParser as middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//route for homepage
app.route('/')
    .get((req, res) => {
        //res.send('hello bootcamp');
        res.render("index.ejs", { error: null })
    })
    .post(auth.signin);
//route for homepage
app.get('/dashboard', function (req, res) {
    res.sendFile(path, join(__dirname, '../index.html'))
});
//route for homepage
app.get('/getPost', function (req, res) {
    res.sendFile(path, join(__dirname, '../index.html'))
});


// POST method route
app.post('/addPost', function (req, res) {
    res.sendFile(path, join(__dirname, '../'))
});


app.listen(port, function () {
    console.log('app started')
});




