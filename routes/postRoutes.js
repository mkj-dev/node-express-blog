const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

// Get form view
router.get('/posts/create', postController.post_get_form);

// Display all posts
router.get('/posts', postController.post_index);

// Save form data to the database
router.post('/posts', postController.post_save_form_data);

// Get each post by id parameter
router.get('/posts/:id', postController.post_details);

// Delete post by id parameter
router.delete('/posts/:id', postController.post_delete);

module.exports = router;