import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const connectDB = async () =>{
const conn = await mongoose.connect(process.env.MONGODB_URI);
if (conn){
    console.log("Mongodb connected successfully");

}}

// health api

app.get('/api/v1/healts',(req,res) => {
    res.json({
        success:true,
        message:"Status ok"
    });
});


const PORT =process.env.PORT ||8080;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    connectDB();
});
