const express=require("express")
const app=express();
const connectDb=require("./config/database")
require("dotenv").config()

app.use(express.json());

const PORT=process.env.PORT

connectDb().then(()=>{app.listen(PORT,()=>{
    console.log("Database connected successfully")
    console.log(`Server is listening on PORT : ${PORT}`)
})})
.catch(()=>{console.log("Issue while connecting to database")})