const transactions = require('../database/transactions');

class Transactions{

    constructor(){
        this.transactions = transactions;
    }

    read(){
        return this.transactions;
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