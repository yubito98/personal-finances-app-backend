const express = require("express")
const port = 8080;
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json()); // Add this line to parse JSON bodies

let transactions = []
let  { categories } = require('./categories')

app.get("/", (req, res) =>{
    res.send("Personal Finances API")
})

app.get("/transactions", (req, res) =>{
    res.json(transactions)
})


app.get("/categories", (req, res) =>{
    res.json(categories)
})


app.post("/transactions", (req, res) =>{
    try{
        const transaction = req.body;
        transactions.push(transaction)
        res.json({
            message: "The transaction was added succesfylly",
            transaction: transaction
        })
    }catch(error){
        console.log(error)
    }
})

app.delete("/transactions/:transactionId", (req, res) =>{
    try{
        let transactionId = req.params.transactionId;
        transactions.splice(transactionId, 1)
        res.json({
            message: `The transaction ${transactionId} has been removed`,
            transactions: transactions
        })
    }catch(error){
        console.log(error)
    }
})

app.put("/transactions/:transactionId", (req, res) =>{
    try{
        let {transactionId} = req.params;
        let transaction = req.body;
        transactions[transactionId] = transaction;
    }catch(error){
        console.log(error)
    }
})



app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})