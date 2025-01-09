const {Client} = require('pg')


async function getConnection(){
    const client = new Client({
        host: 'localhost',
        port: '5432',
        user: 'yubor',
        password: '123yubor',
        database: 'personal_finances'
    })
    await client.connect();
    return client;
}


module.exports = getConnection;
