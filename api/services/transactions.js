const database = require('../libs/postgres');

class Transactions{

    constructor(){

    }

    async read(){
        const transactions = await database();
        const rta = await transactions.query('SELECT * FROM TRANSACTIONS')
        return rta.rows;
    }

    create(body){
        this.transactions.push(body)
    }

    delete(id){
        this.transactions.splice(id, 1);
    }

    update(id, body){
        this.transactions[id - 1] = body;
    }

}






module.exports = Transactions;