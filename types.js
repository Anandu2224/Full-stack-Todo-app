
// creating zod types for input validation

const zod = require('zod');


const createtodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    completed:zod.boolean()
})


const updatetodo = zod.object({
    id: zod.string()
    
})

module.exports={
    createtodo,
    updatetodo
}