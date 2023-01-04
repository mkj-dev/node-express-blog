const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Post schema
const postSchema = new Schema({
    'post-title': {
        type: String,
        required: true
    },
    'post-body': {
        type: String,
        required: true
    },
    'post-snippet': {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
);