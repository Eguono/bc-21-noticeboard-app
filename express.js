const express = require('express');
const bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var path = require('path');

const app =express();

// route our app
var route = require('./app/routes');
var port = 8080;


//use ex
app.set('view engine', 'ejs');
//app.use(expressLayouts);

// app.use((request, response, next)=>{
//     console,log(request.headers);
//     next();
// })

// app.use((err, request, response, next)=>{
//     console.log(err)
//     rsponse.status(500).send('something broke')
// })
app.listen(port, function(){
    console.log('app started')
});
//route for homepage
app.get('/homepage', function(req, res){
    //res.send('hello bootcamp');
    res.sendFile(path, join(__dirname, '../index.html'))
});
//route for homepage
app.get('/dashboard', function(req, res){
    res.sendFile(path, join(__dirname, '../index.html'))
});
//route for homepage
app.get('/getPost', function(req, res){
    res.sendFile(path, join(__dirname, '../index.html'))
});

router.get('/login');
router('/dashboard');
router.get('/address');
router.get('/login');

// POST method route
app.post('/addPost', function (req, res) {
  res.send(path, join(__dirname, '../'))
});

