const express = require("express")
const router = express.Router();
const transactionsService = require('../services/transactions');
const transactions = new transactionsService();

router.get("/", async (req, res) =>{
    try{
        res.status(200).json(await transactions.read())
    }catch(error){
        res.json(error)
    }
})

router.post("/", (req, res) =>{
    try{
        const transaction = req.body;
        transactions.create(transaction);
        res.status(201).json({
            message: "The transaction was added succesfylly",
            transaction: transaction
        })
    }catch(error){
        console.log(error)
    }
})

router.delete("/:transactionId", (req, res) =>{
    try{
        let {transactionId} = req.params;
        transactions.delete(transactionId);
        res.status(200).json({
            message: `The transaction ${transactionId} has been removed`,
        })
    }catch(error){
        console.log(error)
    }
})

router.put("/:transactionId", (req, res) =>{
    try{
        let {transactionId} = req.params;
        let transaction = req.body;
        transactions.update(transactionId, transaction)
        res.status(202).json({transaction})
    }catch(error){
        console.log(error)
    }
})


module.exports = router;
