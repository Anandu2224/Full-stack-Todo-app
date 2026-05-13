
import { createtodo } from './types';
import { updatetodo } from './types';

const express = require('express');

const app = express()

app.use(express.json())

const PORT = 4000;




app.post('/addtask', (req, res) => {

    res.json({
        //  
    })

})


app.get('/viewtask', (req, res) => {

    res.json({
        msg: "alive"
    })

})


app.put('/status', (req, res) => {

    res.json({
        msg: "alive"
    })

})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

