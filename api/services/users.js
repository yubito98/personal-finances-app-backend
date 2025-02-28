const database = require('../libs/postgres.js');

class Users{
    constructor(){

    }

    read(){
        return 'I am reading users'
    }

    async create(body){
        try{
            const query = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3) 
            RETURNING *;
            `
            const values = [body.username, body.email, body.password];
            const rta = await database.query(query, values);
            return rta.rows[0] || 'No hay nada'
        }catch(error){
            throw(error)
        }

    }
}



module.exports = Users;