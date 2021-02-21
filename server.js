import path from "path";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from 'dotenv'
import cors from "cors";
dotenv.config()

// routes
import adminRoutes from "./routes/admin.js"
import authRoutes from "./routes/auth.js"
import categoryRoutes from "./routes/category.js"
import couponRoutes from "./routes/coupon.js"
import productRoutes from './routes/product.js'
import subsRouters from "./routes/sub.js"
import userRoutes from './routes/user.js'
import imagesRoutes from './routes/images.js'

// app
const app = express();

// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// middlewares
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(cors());

app.use('/api', adminRoutes)
app.use('/api', authRoutes)
app.use('/api', categoryRoutes)
app.use('/api', couponRoutes)
app.use('/api', productRoutes)
app.use('/api', subsRouters)
app.use('/api', userRoutes)
app.use('/api', imagesRoutes)

const __dirname = path.resolve()
app.use('/uploads/', express.static(path.join(__dirname, './uploads/')))

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
