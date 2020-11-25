// jshint esversion:6

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');
const logger = require('./app/helpers/logger');
const allRoutes = require('./app/routes/articles-route');
const port = process.env.PORT || 5000; // Port for running App.

// Initialising express app.
const app = express();

mongoose.connect(config.get('dbConfig.dbUrl'), {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        logger.info("DB Successfully Connected!!");
    })
    .catch((err) => {
        logger.error(`Connection Failed due to: ${err}`);
    })

// Parse request of content type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Defining Routes
// =====================================================================
// http://localhost:5000/ => GET request to fetch all articles
// http://localhost:5000/ => POST request to insert data into DB 
// http://locahost:5000/:id => GET request to fetch particular data with ID
// http://localhost:5000/ => DELETE request to delete all data from database.
// http://localhost:5000/:id => DELETE request to delete a particular data with ID = :id.
// http://localhost:5000/:id => PATCH request to update data from database with ID = :id.
app.use('/', allRoutes);
// ======================================================================

// Server for application running on: http://localhost:5000/
app.listen(port, () => logger.info(`Server on Port ${port}`));