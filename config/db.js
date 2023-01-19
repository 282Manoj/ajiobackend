const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb+srv://rf:1234@cluster0.s6urvdb.mongodb.net/review?retryWrites=true&w=majority");


module.exports={
    connection
}