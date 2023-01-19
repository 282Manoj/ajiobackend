const mongoose=require("mongoose");

const reviewSchema=mongoose.Schema({
    review:Number,
    title:String,
    image:String,
    like:Number,
    dislike:Number,
})
// let  rev=["review","review1","review1","review1","review1"]
// let ReviewModel
// for(let i=0;i<21;i++){

    //     console.log(ReviewModel);
    // }
       let ReviewModel=mongoose.model("review1",reviewSchema);
    module.exports= {
     ReviewModel
 }