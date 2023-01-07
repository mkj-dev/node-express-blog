const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://user1:abcd1234@nodeblog.1ivsyaf.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose.connect(dbURI)
    .then(result => app.listen(3000), console.log('successfully connected to the database...'))
    .catch(err => console.error(err));

// include css styles
app.use(express.static(__dirname + '/css'));
// middleware for accepting form data
app.use(express.urlencoded({ extended: true }));

// register ejs view engine
app.set('view engine', 'ejs');

// routing
app.get('/', (req, res) => {
    res.redirect('/posts');
});

app.get('/about', (req, res) => {
    res.render('about');
});

// post routes
app.use(postRoutes);

app.use((req, res) => { // redirects any invalid request to a 404 page
    res.status(404).render('404');
});