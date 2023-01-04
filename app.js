const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/post');

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

// register ejs view engine
app.set('view engine', 'ejs');

// routing
app.get('/', (req, res) => {
    const posts = [
        {'post-title': 'First post', 'post-snippet': 'This is my first post...', 'post-body': 'This is a post body.'},
        {'post-title': 'My second post', 'post-snippet': 'This is my second post.', 'post-body': 'This is a post body.'},
        {'post-title': 'Third post', 'post-snippet': 'This is my third post :)', 'post-body': 'This is a post body.'},
    ];
    res.render('index', { posts });
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