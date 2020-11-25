const express = require('express');
const router = express.Router();
const db = require('../controller/articles-controller');

router.post('/', db.addArticle);
router.get('/', db.getArticle);
router.delete('/', db.deleteAllArticles);
router.get('/:id', db.getArticleByID);
router.patch('/:id', db.updateArticleByID);
router.delete('/:id', db.deleteArticleByID);

// Exporting Routes
module.exports = router