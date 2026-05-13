
const { createtodo } = require('./types')
const { updatetodo } = require('./types')
const { Tasks } = require('./db')
// import { updatetodo } from './types';
const express = require('express');
const app = express()
app.use(express.json())
const PORT = 4000;

app.post('/addtask', async (req, res) => {


    const createPayload = req.body;
    const parsedPayload = createtodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        return res.status(403).json({
            //  
            error: "invalid inputs"
        })
    }
    else {

        try {

            await Tasks.create({
                title: createPayload.title,
                description: createPayload.description,
                completed:false
            })

            return res.json({
                msg: "successfully added task"
            })


        } catch (error) {

           return res.json({
                msg: "inputs task not added"
            })

        }


    }


})







app.get('/viewtask', async (req, res) => {

    const tasks=await Tasks.find({})

    res.json({
        tasks: tasks
    })

})


app.put('/status', async(req, res) => {

    const updatePayload = req.body;
    const parsedPayload = updatetodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(403).json({
            //  
            error: "invalid inputs"
        })
    }
    else {

        await Tasks.updateOne({
            _id:req.body.id
        },{completed:true})

        res.json({
            msg:"status updated as completed"
        })

    }

})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

