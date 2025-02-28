const config = require('../config/config.js')

function checkApiKey(req, res, next){
    const apiKey = req.headers['api'];
    if(apiKey === config.api_key){
        next()
    }else{
        next(console.log('You are unauthorized'))
    }
}

module.exports = { checkApiKey }