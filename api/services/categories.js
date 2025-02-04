const database = require ("../libs/postgres.js");

class Categories{
    constructor(){

    }

    async read(){
        const rta = await database.query('SELECT * FROM categories');
        return rta.rows;
    }
}


module.exports = Categories;