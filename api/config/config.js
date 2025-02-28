require('dotenv').config()


const config = {
    env: process.env.NODE_ENV || 'dev',
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password:process.env.PASSWORD,
    database: process.env.DATABASE,
    api_key: process.env.API_KEY
}


module.exports = {config}