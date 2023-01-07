const express = require('express');
const Post = require('../models/post');
const router = express.Router();

// Post routing
router.get('/posts/create', (req, res) => {
    res.render('create');
});

router.get('/posts', (req, res) => {
    // Display all posts
    Post.find()
        .then(result => {
            res.render('index', { posts: result });
        })
        .catch(err => {
            console.error(err);
        });
});

router.post('/posts', (req, res) => {
    // Save form data to the database
    const post = new Post(req.body);

    post.save()
        .then(result => {
            res.redirect('/posts');
        })
        .catch(err => {
            console.error(err);
        });
});

// Get each post by id parameter
router.get('/posts/:id', (req, res) => {
    const id = req.params.id;

    Post.findById(id)
        .then(result => {
            res.render('details', { post: result });
        })
        .catch(err => {
            console.error(err);
        });
});

// Delete post by id parameter
router.delete('/posts/:id', (req, res) => {
    const id = req.params.id;

    Post.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/posts' });
        })
        .catch(err => {
            console.error(err);
        });
});

module.exports = router;