const express = require("express")
const router = express.Router();

const transactions = require('../database/transactions');

router.get("/", (req, res) =>{
    res.json(transactions)
})

router.post("/", (req, res) =>{
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

router.delete("/:transactionId", (req, res) =>{
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

router.put("/:transactionId", (req, res) =>{
    try{
        let {transactionId} = req.params;
        let transaction = req.body;
        transactions[transactionId] = transaction;
    }catch(error){
        console.log(error)
    }
})


module.exports = router;
