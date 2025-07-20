import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/noteRoute.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();
// console.log(process.env.MONGO_URI);
const app=express()
const PORT = process.env.PORT || 5001
connectDB();
app.use(cors(
    {origin:"http://localhost:5173" ,}
))
app.use(express.json())
app.use(rateLimiter)

app.use("/api/notes",notesRoutes)



app.listen(PORT, ()=>{
    console.log("Server started oon PORT: ",PORT);
});