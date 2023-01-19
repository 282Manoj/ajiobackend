const express =require("express");
const {connection} =require("./config/db");
const {UserRouter} =require("./routes/user.route");
const {cartRouter} =require("./routes/cart.route")
const {ReviewRouter}=require("./routes/review.route")
const {authenticate}=require("./middleware/authenticate.middleware");

const cors=require("cors");

const app=express();
app.use(cors({
    origin:"*"
}))
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("welcome");
});
app.use("/review",ReviewRouter)
app.use("/users",UserRouter);
// app.use(authenticate);
app.use("/cart",UserRouter);

app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected tot he DB");
    } catch (error) {
        console.log("Trouble connecting to the DB");
    }
    console.log('running at 8080');
})