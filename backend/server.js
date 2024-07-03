// creating basic express server

import express from "express"
import cors from "cors"

//remember to name it with .js
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

//app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// mongodb connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);

//this api endpoint is built to check images that are uploaded in the uploads folder with /images/image_filename.png
app.use("/images",express.static('uploads'))

// routes
app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://itanuragadhikari:245540@cluster0.yei4ihg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0