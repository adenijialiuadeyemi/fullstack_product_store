import express from "express"
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js"
import { Product } from "./model/product.model.js"
import { productRoute } from "./routes/product.route.js"


dotenv.config()

const app = express()

//middleware
app.use(express.json())

app.use('/api/product', productRoute)
app.get('/', (req, res) => {
  res.send("HELLO SERVER")
})




app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Running at http://localhost:${process.env.PORT}`)
})

