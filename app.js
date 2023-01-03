const express = require('express');

// express app
const app = express();

// include css styles
app.use(express.static(__dirname + '/css'));

// register ejs view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

// routing
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/posts/create', (req, res) => {
    res.render('create');
});

app.use((req, res) => { // redirects any invalid request to a 404 page
    res.status(404).render('404');
});