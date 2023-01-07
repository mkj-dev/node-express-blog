const Post = require('../models/post');

const post_get_form = (req, res) => {
    // Get form
    res.render('create');
}

const post_index = (req, res) => {
    // Display all posts
    Post.find()
        .then(result => {
            res.render('index', { posts: result });
        })
        .catch(err => {
            console.error(err);
        });
}

const post_save_form_data = (req, res) => {
    // Save form data to the database
    const post = new Post(req.body);

    post.save()
        .then(result => {
            res.redirect('/posts');
        })
        .catch(err => {
            console.error(err);
        });
}

const post_details = (req, res) => {
    // Get each post by id parameter
    const id = req.params.id;

    Post.findById(id)
        .then(result => {
            res.render('details', { post: result });
        })
        .catch(err => {
            res.status(404).render('404');
        });
}

const post_delete = (req, res) => {
    // Delete post by id parameter
    const id = req.params.id;

    Post.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/posts' });
        })
        .catch(err => {
            console.error(err);
        });
}

module.exports = {
    post_index,
    post_get_form,
    post_save_form_data,
    post_details,
    post_delete
}