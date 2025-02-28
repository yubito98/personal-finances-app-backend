const express = require('express')

const transaction = require("./transactions");
const categories = require('./categories');
const users = require('./users.js');
const profiles = require('./profiles.js')


function routerApi(app){
    const router = express.Router();
    app.use('/api', router)
    router.use('/transactions', transaction);
    router.use('/categories', categories);
    router.use('/users', users);
    router.use('/profiles', profiles);
}


module.exports = routerApi