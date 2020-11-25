const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

// Directly exporting Model
const Articles = module.exports = mongoose.model('Article', Schema); 