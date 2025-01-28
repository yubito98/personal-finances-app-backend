const database = require('../libs/postgres.js');

class Transactions{

    constructor(){
        
    }

    async read(){
        const rta = await database.query('SELECT * FROM TRANSACTIONS')
        return rta.rows;
    }

    async create(body){
        try {
            const query = `
                INSERT INTO transactions (concept, value, type, category_id, date) 
                VALUES ($1, $2, $3, $4, $5) 
                RETURNING *;
            `;
            const values = [body.concept, body.value, body.type || "Expense", body.category_id || 1, body.date]; // Using placeholders
    
            const rta = await database.query(query, values);
            return rta.rows[0]; // Return inserted row
        } catch (error) {
            console.error("Error inserting transaction:", error);
            throw error; // Rethrow error for debugging
        }
    }

    delete(id){
        this.transactions.splice(id, 1);
    }

    update(id, body){
        this.transactions[id - 1] = body;
    }

}






module.exports = Transactions;