const express = require('express');

// express app
const app = express();

// register ejs view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
});