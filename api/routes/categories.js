const express = require('express')
const router = express.Router()

const service = require('../services/categories');
const categories = new service();


router.get("/", async (req, res) =>{
    try{
        const response = await categories.read();
        res.status(200).json(response);
    }catch(error){
        res.json(error)
    }
})


module.exports = router;
