import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"



//app config
const app = express()
const port = process.env.PORT || 4000;


//middleware
app.use(express.json())//whenever we get request from frontend to backend, that will be parsed with json
app.use(cors())//we can access backend from any frontend

//DB Connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=> {
    res.send("API working")
})

app.listen(port, ()=> {
    console.log(`Server started on http://localhost:${port}`)
})

