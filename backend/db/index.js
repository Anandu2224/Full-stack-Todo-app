const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://Anandu2001:Anandu2206@cluster0.xxwybre.mongodb.net/DailyTaskPlanner?retryWrites=true&w=majority&appName=Cluster0');

const todoSchema= new mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})

const Tasks= new mongoose.model('Tasks',todoSchema);

module.exports={Tasks};