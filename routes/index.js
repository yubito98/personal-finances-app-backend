const transaction = require("./transactions");
const categories = require('./categories')


function routerApi(app){
    app.use('/transactions', transaction);
    app.use('/categories', categories);
}


module.exports = routerApi