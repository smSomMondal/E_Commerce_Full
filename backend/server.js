import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRouter from "./routes/user.route.js";
import ProductRoute from "./routes/product.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/user',AuthRouter)
app.use('/product',ProductRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

