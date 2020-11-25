const mongoose = require('mongoose');
const articles = require('../models/article-model');
const logger = require('../helpers/logger');

// Add Articles to DB
module.exports.addArticle = (req, res) => {
    // Checking if value not entered.
    if (!req.body.article_title || !req.body.article_content) {
        res.json({ "Error": "Please enter the values, it can't be vaccent." });
    }

    // Create a new article
    const newArticle = new articles({
        title: req.body.article_title,
        content: req.body.article_content
    });
    // Saving new article to database
    newArticle
        .save()
        .then((data) => {
            logger.info('Data successfully inserted to database!!');
            res.json(data);
        })
        .catch((err) => logger.error(`Error occured ${err}`));
}

// GET All articles from DB
module.exports.getArticle = (req, res) => {
    articles.find()
        .then((data) => {
            logger.info(`Data Find successfully!!`);
            res.json(data);
        })
        .catch((err) => {
            logger.error(`Error Occured: ${err}`);
        })
}

// GET articles by ID
module.exports.getArticleByID = (req, res) => {
    articles.find({ _id: req.params.id })
        .then((data) => {
            logger.info(`Data found by ID: ${req.params.id}`);
            res.send(data);
        })
        .catch((err) => {
            logger.error(`Error occured: ${err}`);
        })
}

// UPDATE articles by ID
module.exports.updateArticleByID = (req, res) => {
    articles.update({ _id: req.params.id }, { $set: req.body })
        .then((data) => {
            logger.info(`Data successfully updated with ID: ${req.params.id}`);
            res.send(data);
        })
        .catch((err) => logger.error(`Error occured: ${err}`))
}

// DELETE articles by ID
module.exports.deleteArticleByID = (req, res) => {
    articles.deleteOne({ _id: req.params.id })
        .then((data) => {
            logger.info(`Article successfully deleted with ID: ${req.params.id}`);
            res.send(data);
        })
        .catch((err) => logger.error(`Error occured: ${err}`))
}

// DELETE all articles form DB
module.exports.deleteAllArticles = (req, res) => {
    articles.deleteMany()
        .then((data) => {
            logger.info(`All data from DB successfully Deleted!!`);
        })
        .catch((err) => { logger.error(`Error occured: ${err}`) })
}