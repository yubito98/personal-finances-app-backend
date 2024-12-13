const express = require('express')

const transaction = require("./transactions");
const categories = require('./categories')


function routerApi(app){
    const router = express.Router();
    app.use('/api', router)
    router.use('/transactions', transaction);
    router.use('/categories', categories);
}


module.exports = routerApi