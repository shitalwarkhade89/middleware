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
// checkApi middleware

const checkApi=(req,res,next) => {
    const {apiKey} =req.query;
    if(apiKey ==="shital"){
        next();
        return res.json({
            success:true,
            message:"API key is valid"
        })
    }
    else(
        res.json({
            success:false,
            message:"APi key is invalid"
        })

    )}

    const checkValidations =(req,res,next) => {
        const {name,age,address} =req.body;

        if(!name){
            res.json({
                success:true,
                message:"Name is missing"
            })
        }
        if(!age){
            res.json({
                success:true,
                message:"Age is missing"
            })
        }
        if(!address){
            res.json({
                success:true,
                message:"Address is missing"
            })
        }
        next();
    }

// health api

app.get('/api/v1/healts',(req,res) => {
    res.json({
        success:true,
        message:"Status ok"
    });
});

// post api

app.post('/api/v1/students',checkApi,checkValidations,(req,res) => {
  res.json({
    success:true,
    data:[],
    message:"Students is created"
  })   
});


// get api

app.get('/api/v1/students',checkApi, (req,res) => {
    res.json({
        success:true,
        message:"Students featch successfully" 
    })
})

const PORT =process.env.PORT ||8080;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    connectDB();
});
