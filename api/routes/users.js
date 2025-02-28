const express = require("express")
const router = express.Router();

const usersService = require('../services/users.js');
const users = new usersService();

router.get('/', (req, res) =>{
    try{
        const response = users.read();
        res.json(response)
    }catch(error){
        console.log(error)
    }
})

router.post('/', async (req, res) =>{
    try{
        const body = req.body;
        const response = await users.create(body);
        res.status(201).json(response)
    }catch(error){
        console.log(error)
    }
    
})

module.exports = router