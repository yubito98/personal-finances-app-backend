require('dotenv').config()

const express = require("express")
const port = process.env.GLOBAL_PORT;
const cors = require('cors');
const app = express();
const routerApi = require('./routes');
const { checkApiKey } = require('./middlewares/authHandler.js')

app.use(cors())
app.use(express.json()); // Add this line to parse JSON bodies

app.get("/api", (req, res) =>{
    res.send("Personal Finances API")
})

app.get('/api/test', checkApiKey, (req, res) =>{
    res.send('this is a test')
})

routerApi(app)


app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})