const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        default: 'Anonymous',
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

const AModel = mongoose.model('AModel', articleSchema, "articles");

module.exports = AModel