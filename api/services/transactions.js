const database = require('../libs/postgres.js');

class Transactions{

    constructor(){
        
    }

    async read(){
        try{
            const query = `
            SELECT t.*, c.name AS category_name 
            FROM Transactions t 
            JOIN Categories c ON t.category_id = c.id;
            `
            const rta = await database.query(query)
            const transactions = rta.rows.map(item =>{
                if(item.category_id){
                    item.category ={
                        id: item.category_id,
                        name: item.category_name
                    }
                    delete item.category_id
                    delete item.category_name
                    return item
                }
            })
            return transactions;
        }catch(error){
            throw error
        }
       
    }

    

    async create(body){
        try {
            const query = `
                INSERT INTO transactions (concept, value, type, category_id, date) 
                VALUES ($1, $2, $3, $4, $5) 
                RETURNING *;
            `;
            const values = [body.concept, body.value, body.type, body.category, body.date]; // Using placeholders
    
            const rta = await database.query(query, values);
            return rta.rows[0]; // Return inserted row
        } catch (error) {
            console.error("Error inserting transaction:", error);
            throw error; // Rethrow error for debugging
        }
    }

    async delete(id){
        try{
            const query = `
            DELETE FROM transactions
            WHERE id = ${id}
            `
            const rta = await database.query(query);
            return rta;
        }catch(error){
            throw error
        }
    }

    update(id, body){
        this.transactions[id - 1] = body;
    }

}






module.exports = Transactions;